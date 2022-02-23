import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HasManager";


const login = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body
        if (!email || !password) {
            res.status(422).send("Insira corretamente as informações")
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Invalid email, missing @");
        }
        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Invalid password, enter 6 or more characters");
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        if (!user) {
            res.status(409).send('Esse email não está cadastrado!')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())
        if (!passwordIsCorrect) {
            res.status(401).send("Email ou senha incorretos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

        res.status(200).send({ message: 'Usuário logado com sucesso', token })

    } catch (err: any) {
        res.status(400).send({ message: err.message })
    }
}
export default login;