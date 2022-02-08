import { Request, Response } from "express"
import { connection } from "../data/connection"
import { toUser } from "./getAllUsers";

export async function listagemUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const name = req.query.name;
        let sort = req.query.sort as string;
        let order = req.query.order as string;
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let size = 5;
        let offset = size * (page - 1)

        if (sort !== 'name' && sort !== 'type') {
            sort = 'email';
        }
        if (order.toUpperCase() !== "ASC" && order.toLocaleUpperCase() !== "DESC") {
            order = 'DESC';
        }
        const result = await connection('aula48_exercicio')
            .where('name', 'like', `%${name}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        const users = result.map(toUser)
        res.status(200).send(users)
    } catch (error: any) {

    }
}