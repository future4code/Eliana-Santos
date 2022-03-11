import UserDataBase from "../data/UserDataBase"; //tirar isso 
import Post, { PostInputDTO } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HasManager";
import { IdGenerator } from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";


export default class PostBusiness {
    private userData: UserRepository
    private idGenerator: IdGenerator
    private hashManager: HashManager
    private authenticator: Authenticator
    constructor(userDataImplementation: UserRepository) {
        this.userData = userDataImplementation
        this.idGenerator = new IdGenerator()
        this.hashManager = new HashManager()
        this.authenticator = new Authenticator()
    }


    createPost = async (input: PostInputDTO) => {
        const { photo, description, type } = input
        if (!photo || !description || !type) {
            throw new Error("Campos inválidos")
        }

        const id = this.idGenerator.generateId()
              
        const post = new Post(
            id,
            photo,
            description,
           type,
           creatAt,
           authorId
           
        )
        
        if(!token){
            throw new Error('Esse campo necessita de um token')
         }

        await this.userData.insert(post)
        const token = this.authenticator.generateToken({ id })
        return token
    }

    getPostById = async (input: LoginInputDTO) => {
        const { id, password } = input
        if (!email || !password) {
            throw new Error("Email ou senha inválidos")
        }

        const userDatabase = new UserDataBase()

        const user = await userDatabase.findByEmail(email)

        if (!user) {
            throw new Error('Esse email não está cadastrado!')
        }

        const passwordIsCorrect = await this.hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Senha incorreta")
        }

        const id = this.idGenerator.generateId()


        const token = this.authenticator.generateToken({ id })
        return token
    }
}