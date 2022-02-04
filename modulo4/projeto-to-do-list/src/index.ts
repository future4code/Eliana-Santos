import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";

// Exercicio 1a 
/* INSERT INTO ToDoListUser (id, name, nickname, email)
VALUES(
  "004", 
  "Joana",
 "Jo",
  "joana@gmail.com",
  ); */
let createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string): Promise<any> => {
    await connection
        .insert({
            id: id as string,
            name: name,
            nickname: nickname,
            email: email
        }).into("ToDoListUser")

}
app.post('/user', async (req: Request, res: Response) => {
    try {
        const { name, email, nickname } = req.body

        if (!name || !nickname || !email) {
            throw new Error("campos necessários para criar produto não informados")
        }

        if (typeof (name) !== 'string') {
            throw new Error("Nome tem que ser um texto")
        }

        if (req.body) {
            await createUser({
                id: Date.now().toString(),
                name: req.body,
                nickname: req.body,
                email: req.body
            });

            res.send(createUser).status(201)
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


