import { Request, Response } from 'express'
import PostBusiness from '../business/PostBusiness'
import PostDataBase from '../data/PostDataBase'
//import FirestoreUserDatabase from '../data/FirestoreUserDatabase'
import { PostInputDTO } from '../model/Post'
import { SignupInputDTO } from '../model/User'

export default class PostController {
    private postBusiness: PostBusiness
    constructor() {
        this.postBusiness = new PostBusiness(new PostDataBase())
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

            const tokenData = await this.postBusiness.insertPost(input)


            res.status(201).send({ message: "Post Criado com sucesso", tokenData })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }

    getPostById = async (req: Request, res: Response) => {
        const token: string = req.headers.authorization as string

        try {

            const { id } = req.params

            //const token = await this.postBusiness.getPostById(id)


            res.status(200).send(token)
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }
} 