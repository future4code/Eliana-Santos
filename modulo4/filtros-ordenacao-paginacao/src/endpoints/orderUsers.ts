import { Request, Response } from "express"
import { connection } from "../data/connection"
import { toUser } from "./getAllUsers";

//EXERCICIO 2
export async function orderUsers(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
       const name = req.query.name;
       let sort = req.query.sort as string;
       let order = req.query.order as string;
 
       console.log(req.query)
 
       if (sort !== 'name' && sort !== 'type') {
          sort = 'email';
       }
       if (order.toUpperCase() !== "ASC" && order.toLocaleUpperCase() !== "DESC") {
          order = 'DESC';
       }
       const result = await connection('aula48_exercicio')
          .where('name', 'like', `%${name}%`)
          .orderBy(sort, order)
 
       const users = result.map(toUser)
       res.status(200).send(users)
    } catch (error: any) {
 
    }
 }
 