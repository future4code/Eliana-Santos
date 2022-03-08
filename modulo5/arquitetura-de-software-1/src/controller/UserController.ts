import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
const userBusiness = new UserBusiness()

export class UserController {
    
    signUp = async (req: Request, res: Response) => {
        try {

            const { name, email, password, role } = req.body

            const token = await userBusiness.signUp(name, email, password, role)

            res.status(201).send({ message: 'Usuário Criado com sucesso', token })

        } catch (err: any) {
            res.status(400).send({ message: err.message })
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            const token = await userBusiness.login(email, password)

            res.status(200).send({ message: 'Usuário logado', token })

        } catch (err: any) {
            res.status(400).send({ message: err.message })
        }
    }



}