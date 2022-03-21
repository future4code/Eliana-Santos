import { Request, Response } from 'express'
import UserBusiness from '../business/UserBusiness'
//import FirestoreUserDatabase from '../data/FirestoreUserDatabase'
import UserData from '../data/UserDataBase'
import { LoginInputDTO, SignupInputDTO } from '../model/User'

export default class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(new UserData())
    }

    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            const input: SignupInputDTO = {
                name,
                email,
                password
            }
            
            const token = await this.userBusiness.signup(input)

            res.status(201).send({ message: "Usuário cadastrado com sucesso", token })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro ao se cadastrar")
        }
    }

    login = async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body
            const input: LoginInputDTO = {
                email,
                password
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({ message: "Usuário logado", token })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro ao logar")
        }
    }
}