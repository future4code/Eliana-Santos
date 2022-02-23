import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection('UserCookenu')
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
            const user = await BaseDatabase.connection('User')
                .select("*")
                .where({ email })
            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}