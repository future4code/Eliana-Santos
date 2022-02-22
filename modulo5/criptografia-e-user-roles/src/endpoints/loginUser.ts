import { Request, Response } from "express";
import { Authenticator } from "../services/Auth";
import IdGenerator from "../services/IdGenerator";

const loginUser = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email, missing @");
        }
        const passwordIsCorrect: boolean = user && new HashManager().compareHash(password, user.password)

        if (password !== password) {
            res.statusCode = 422
            throw new Error("Invalid password");
        }

        const id: string = new IdGenerator().generatedId()

        const authenticator: Authenticator = new Authenticator()
        const token = authenticator.GenerateToken({ id: id })

        res.status(200).send({ token })

    } catch (err: any) {
        res.status(400).send({ message: err.message })
    }
}
export default loginUser;