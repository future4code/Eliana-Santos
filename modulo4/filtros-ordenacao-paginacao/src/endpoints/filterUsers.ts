import { Request, Response } from "express"
import { connection } from "../data/connection"
import { toUser } from "./getAllUsers";

// Exercicio 1
export async function filterUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const name = req.query.name;
        const type = req.query.name
        if (name === '') {
            throw new Error("O nome não foi informado")
        }

        const result = await connection('aula48_exercicio')
            .where('name', 'like', `%${name}%`)
            .where('type', 'like', `%${type}%`)

        const users = result.map(toUser)

        res.status(200).send(users)
    } catch (error: any) {

    }
}
