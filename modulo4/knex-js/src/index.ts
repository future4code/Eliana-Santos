import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";


app.get("/actor", async (req: Request, res: Response) => {
    try {
        const resultado = await connection.raw(`
        SELECT * FROM Actor
         `)
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }
})
//Exercicio 1b
app.get("/actor/nome", async (req: Request, res: Response): Promise<any> => {
    try {
        const { nome } = req.body
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE nome LIKE "%${nome}%"
            `)

        res.send(result)

    } catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }
})
// Exercicio 1c
app.get("/actor/gender", async (req: Request, res: Response): Promise<any> => {
    try {
        const { gender } = req.body
        const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `)

        res.send(result)

    } catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// Exercicio 2a 
app.put("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        const { id, salary } = req.body

        const updateActor = await connection("Actor").update({
            salary: salary,
        }).where("id", id)
        res.send(updateActor).status(201)
    }
    catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }
    /// **com raw
    // try {

    //     const { id, salary } = req.body
    //     const result = await connection.raw(`
    //     UPDATE Actor SET Actor.salary = 45000 WHERE Actor.id = ${id}
    //         `)

    //     res.send(result)

    // } catch (error: any) {
    //     console.log(error)
    //     res.status(500).send(error.sqlMessage || error.message)
    // }
})
// 2B
app.delete("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.body

        const deleteActor = await connection("Actor")
            .delete()
            .where("id", id)
        res.send(deleteActor).status(200)
    }
    catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }

})
// 2C
app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const { gender } = req.body

        const avgSalary = await connection("Actor")
            .avg("salary as average")
            .where(gender)
        res.send(avgSalary).status(200)
    }
    catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }

})
// Exercicio 3A
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
}
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (error: any) {
        console.log(error)
        res.status(400).send(error.sqlMessage || error.message)
    }
})
//3B
const countActors = async (gender: string): Promise<any> => {
      const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `)
      return result[0][0]
}
app.get("/actor", async (req: Request, res: Response) => {
    try {
        
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
          quantity: count,
        });
    } catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }
})
// 4A
app.put("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        const { id, salary } = req.body

        const updateActor = await connection("Actor").update({
            salary: salary,
        }).where("id", id)
        res.send(updateActor).status(201)
    }
    catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }
})
// 4B
app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const id  = req.params.id

        const deleteActor = await connection("Actor")
            .delete()
            .where("id", id)
        res.send(deleteActor).status(200)
    }
    catch (error: any) {
        console.log(error)
        res.status(500).send(error.sqlMessage || error.message)
    }

})