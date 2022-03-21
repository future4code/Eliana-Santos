import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection('User_Arq')
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole(),
                })
        } catch (error) {

        }
    }
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('User_Arq')
                .select("*")
                .where({ email })
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getUser(): Promise<User[]> {
        try {
            const users = await BaseDatabase.connection('User_Arq')
                .select('*')

            return users.find(user => User.toUserModel(user))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public async deleteUser(id: string): Promise<void> {
        try {
            await BaseDatabase.connection('User_Arq')
                .where({ id })
                .del()

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}