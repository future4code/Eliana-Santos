import { Request, Response } from "express";
import connection from "../data/connection";

export const getEmailUser = async (req: Request, res: Response) => {
    try {
        
        const { email } = req.query
        const busca = await connection('User')
             .where("email",`${email}`)
         res.send({busca})

    } catch (error: any) {
        res.send(error.message)
    }
}
export default getEmailUser;