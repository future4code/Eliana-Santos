import { Request, Response } from 'express'
import PostBusiness from '../business/PostBusiness'
import FirestoreUserDatabase from '../data/FirestoreUserDatabase'
import UserData from '../data/UserDataBase'
import { PostInputDTO } from '../model/Post'
import { SignupInputDTO } from '../model/User'

export default class PostController {
    private postBusiness: PostBusiness
    constructor() {
        this.postBusiness = new PostBusiness(new UserData())
    }

    createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, type } = req.body
            const token: string = req.headers.authorization as string
            
            const input: PostInputDTO = {
                photo,
                description,
                type,
                token
            }

            const tokenData = await this.postBusiness.createPost(input)


            res.status(200).send({ message: "Criado com sucesso", tokenData })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }

    getPostById = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.getPostById(input)

            res.status(200).send({ message: "Usuário cadastrado com sucesso", token })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }
}