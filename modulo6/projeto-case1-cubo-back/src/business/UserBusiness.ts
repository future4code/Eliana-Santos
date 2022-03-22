import { UserInputDTO} from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

    async createUser(user: UserInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const userDatabase = new UserDatabase();
        await userDatabase.insert(id, user.firstName, user.lastName, user.participation);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id});

        return accessToken;
    }

    async getUserByEmail(user: ) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getAllUser();

       

        if (!) {
            throw new Error("Invalid Password!");
        }

        return ;
    }
}