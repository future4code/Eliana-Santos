import PostDataBase from "../data/PostDataBase";
import UserDataBase from "../data/UserDataBase"; //tirar isso 
import Post, { PostInputDTO } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HasManager";
import { IdGenerator } from "../services/IdGenerator";
import { PostRepository } from "./PostRepository";


export default class PostBusiness {
    private postData: PostRepository
    private idGenerator: IdGenerator
    private authenticator: Authenticator

    constructor(postDataImplementation: PostRepository) {
        this.postData = postDataImplementation
        this.idGenerator = new IdGenerator()
        this.authenticator = new Authenticator()
    }


    insertPost = async (input: PostInputDTO) => {
        const { photo, description, type } = input
        if (!photo || !description || !type) {
            throw new Error("Campos inválidos")
        }

        const id = this.idGenerator.generateId()
        const createAt = new Date()

        const post = new Post(
            id,
            photo,
            description,
            type,
            createAt,
            ""
        )

/*        if (!tokenData) {
            throw new Error('Esse endepoint exige uma autorização a ser passada nos headers')
        } 

        console.log(post)
        await this.postData.createPost(post)
        return tokenData */
        return null
    }

    getPostById = async () => {


        const postDatabase = new PostDataBase()

        /*  const post = await postDatabase.getPostById()
 
         if (!post) {
             throw new Error('Post não encontrado')
         } */


    }
} 