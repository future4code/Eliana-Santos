import UserDataBase from "../data/UserDataBase"; //tirar isso 
import User, { LoginInputDTO, SignupInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HasManager";
import { IdGenerator } from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";


export default class UserBusiness {
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


    signup = async (input: SignupInputDTO) => {
        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error("Campos inválidos")
        }

        const registeredUser = await this.userData.findByEmail(email)
        if (registeredUser) {
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generateId()

        const hashedPassword = await this.hashManager.hash(password)
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        await this.userData.insert(user)
        const token = this.authenticator.generateToken({ id })
        return token
    }

    login = async (input: LoginInputDTO) => {
        const { email, password } = input
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