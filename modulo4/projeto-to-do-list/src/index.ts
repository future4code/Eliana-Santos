import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";

type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

type Task = {
    id: string,
    title: string,
    description: string,
    limitDate: Date,
    user: User
}

const getUser = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = '${id}'
`)

    return result[0][0]
}
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (id) {
            throw new Error("Usuário não encontrado!")
        }

        const user = await getUser(id)
        res.status(200).send(user)
    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.sqlMessage || error.message)
    }
})
const getTask = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListTask WHERE id = '${id}'
`)

    return result[0][0]
}
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (id) {
            const task = await getTask(id);
            if (!task) {
                throw new Error("Tarefa não encontrada!")
            }

            res.status(200).send({
                id: task.id,
                title: task.title,
                description: task.description,
                limitDate: task.limit_date,
                creatorUserId: task.creator_user_id
            })
        }

    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.sqlMessage || error.message)
    }
})

let createUser = async (user: User): Promise<any> => {
    console.log()
    await connection
        .insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
        }).into("TodoListUser")

}
app.post('/user', async (req: Request, res: Response) => {
    try {
        const { name, email, nickname } = req.body

        if (!name || !nickname || !email) {
            throw new Error("campos necessários não foram informados")
        }

        if (req.body) {
            await createUser({
                id: Date.now().toString(),
                name: name,
                nickname: nickname,
                email: email
            });

            res.end(createUser).status(201)
        } else {
            throw new Error("Informe os dados do produto corretamente")
        }
    } catch (error: any) {
        switch (error.message) {
            case "campos necessários para criar produto não informados":
                res.status(422)
                break
            default:
                res.status(500)
        }

        res.send(error.message);
    }
})

let createTask = async (task: Task): Promise<any> => {
    await connection
        .insert({
            id: task.id,
            title: task.title,
            description: task.description,
            limit_date: task.limitDate,
            creator_user_id: task.user.id
        }).into("TodoListTask")
}

app.post('/task', async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Campos necessários não foram informados")
        }

        const user = await getUser(creatorUserId)
            .then(async (user: User) => { return user })
            .catch(() => {
                throw new Error("Erro ao buscar usuário não foi encontrado.")
            });

        if (user) {
            const id = Date.now().toString()
            await createTask({
                id: id,
                title: title,
                description: description,
                limitDate: convertToDate(limitDate),
                user: user
            });

            const taskSave = await getTask(id)
            res.send(taskSave).status(201);
        } else {
            throw new Error("Usuário não foi encontrado.")
        }

    } catch (error: any) {
        switch (error.message) {
            case "Campos necessários não foram informados":
                res.status(422)
                break
            case "Usuário não foi encontrado.":
                res.status(401)
                break
            case "Erro ao buscar usuário não foi encontrado.":
                res.status(500)
                break
            default:
                res.status(500)
        }

        res.send(error.message);
    }
})
function convertToDate(dateString: string) {
    try {
        let d = dateString.split("/");
        let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
        return dat;
    } catch (error) {
        throw new Error("Erro ao converter Data")
    }
}

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const { name, nickname } = req.body

        if (!name || !nickname) {
            throw new Error("campos necessários não foram informados")
        }

        const updateUser = await connection("TodoListUser").update({
            name,
            nickname,
        }).where("id", id)
        res.end(updateUser).status(201)
    }
    catch (error: any) {
        res.status(500).end(error.sqlMessage || error.message)
    }
})

app.delete("/user/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        await connection("TodoListUser")
            .delete()
            .where("id", id)
        res.send({
            message: "Usuário deletado",
        }).status(200)
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})
app.delete("/task/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        await connection("TodoListTask")
            .delete()
            .where("id", id)
        res.send({
            message: "Tarefa Deletada",
        }).status(200)
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})