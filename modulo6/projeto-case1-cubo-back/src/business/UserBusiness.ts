import { User, UserInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator
    ) { }

    async createUser(user: UserInputDTO) {
        const id = this.idGenerator.generate()
        if (!user.firstName || !user.lastName || !user.participation) {
            throw new Error('Campos inseridos incorretamente')
        }

        await this.userDatabase.insert(id, user.firstName, user.lastName, user.participation);

        const result = await this.userDatabase.insert(user)
        return result
    }

    async getUser() {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getAllUser();

        return userFromDB

    }
}