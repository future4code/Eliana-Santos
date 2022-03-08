import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HasManager"
import { IdGenerator } from "../services/IdGenerator"
import { User, USER_ROLES } from "../types/User"

const userDatabase = new UserDatabase()

export class UserBusiness {

    signUp = async (
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
    ) => {
        if (!name || !email || !password || !role) {
            throw new Error("Insira corretamente as informações")
        }

        if (email.indexOf("@") === -1) {

            throw new Error("Invalid email, missing @");
        }
        if (password.length < 6) {

            throw new Error("Invalid password, enter 6 or more characters");
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        if (user) {
            throw new Error('Esse email já está cadastrado!')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword, role)
        await userDatabase.createUser(newUser);

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id, role })

        return token
    }


    login = async (
        email: string,
        password: string
    ) => {
        if (!email || !password) {
            throw new Error("Insira corretamente as informações")
        }

        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            throw new Error('Esse email não está cadastrado!')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())
        if (!passwordIsCorrect) {
            throw new Error("Email ou senha incorretos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: user.getId(), role: user.getRole() })

        return token
    }

    getUser = async (token: string) => {

        if (!token) {
            throw new Error('Esse endepoint exige uma autorização a ser passada nos headers');
        }

        const userDatabase = new UserDatabase()
        const users = await userDatabase.getUser()

        return users
    }

    delete = async (
        id: string,
        token: string) => {
        const getToken = new Authenticator()
        const verifiedToken = getToken.getTokenData(token);

        if (verifiedToken.role !== "ADMIN") {
            throw new Error("Apenas administradores podem deletar usuários!")
        }

        return await userDatabase.deleteUser(id);
    }

}
}