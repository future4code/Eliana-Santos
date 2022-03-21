import { UserRepository } from "../business/UserRepository";
import User from "../model/User";
import BaseDatabase from "./BaseDatabase";

export default class UserDataBase extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = "labook_users"

    insert = async (user: User) => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert({
                    id:user.id,
                    name:user.name,
                    email: user.email,
                    password: user.password
                })
                return user
        } catch (error) {
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: User[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select("*")
                .where({ email })
                return queryResult[0] && User.toUserModel(queryResult[0])
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao buscar usuário no banco")
        }
    }

}