import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


const getUsers = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            res.status(422)
            .send('Esse endepoint exige uma autorização a ser passada nos headers');
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token as string)

        if (tokenData.role !== "ADIM") {
            res.status(401)
            .send("Somente administradores podem acessar essa funcionalidade")
        }
        const userDatabase = new UserDatabase()
        const users = await userDatabase.get()
        
        res.status(200).send(users)

    } catch (err: any) {
        res.status(400).send({ message: err.message })
    }
}
export default getUsers;