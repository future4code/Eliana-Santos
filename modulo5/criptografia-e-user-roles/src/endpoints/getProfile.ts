import { Request, Response } from "express";
import connection from "../data/connection";
import { Authenticator } from "../services/Auth";

export const getProfile = async (req: Request, res: Response) => {
    try {
        const id: any = new Authenticator()
        const busca = await connection('User')
            .select('*')
            .from('User')
            .where({ id })

        res.send({ busca })

    } catch (error: any) {
        res.send(error.message)
    }
}
export default getProfile;