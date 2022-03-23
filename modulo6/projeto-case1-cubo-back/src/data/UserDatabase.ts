import { BaseDatabase } from "./BaseDatabase";
import { User, UserInputDTO } from "../model/User";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "users_cubo";

  public async insert(user: UserInputDTO): Promise<string> {
    try {
      await this.getConnection()
        .insert(user)
        .into(UserDatabase.TABLE_NAME);
        
      return "Usuario criado com sucesso";
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllUser() {
    try {
      const result: User[] = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME);

      const users = result.map((user) => {
        return User.toUserModel(user)
      })
      return users
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


}
