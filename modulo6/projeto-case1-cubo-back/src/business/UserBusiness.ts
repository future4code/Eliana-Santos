import { UserInputDTO } from "../model/User";
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
        // usuario tem que colocar sobrenome diferente 
        if(user.lastName !== user.lastName){
            throw new Error('Usuário já inserido na tabela')
        }

        if (user.participation <= 0) {
            throw new Error('A participação não pode ser 0')
        }

        const result = await this.userDatabase.insert(id, user.firstName, user.lastName, user.participation);

        return result
    }

    async getUser() {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getAllUser();

        return userFromDB

    }
}