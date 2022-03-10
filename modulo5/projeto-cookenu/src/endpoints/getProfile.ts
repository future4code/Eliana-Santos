import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";

const getProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            res.status(422)
            .send('Esse endepoint exige uma autorização a ser passada nos headers');
        }

        const userDatabase = new UserDatabase()
        const users = await userDatabase.getUser()
        
        res.status(200).send(users)

    } catch (err: any) {
        res.status(400).send({ message: err.message })
    }
}
export default getProfile;