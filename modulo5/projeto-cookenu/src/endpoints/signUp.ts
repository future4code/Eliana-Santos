import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HasManager";
import { IdGenerator} from "../services/IdGenerator";
import { User } from "../types/User";

const signUp = async (req: Request, res: Response) => {
   try {

      const { name, email, password, role } = req.body
      if (!name || !email || !password || !role) {
         res.status(422).send("Insira corretamente as informações")
      }

      if (email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("Invalid email, missing @");
      }
      if (password.length < 6) {
         res.statusCode = 422
         throw new Error("Invalid password, enter 6 or more characters");
      }
      const userDatabase = new UserDatabase()
      const user = await userDatabase.findUserByEmail(email)
      if (user) {
         res.status(409).send('Esse email já está cadastrado!')
      }

      const idGenerator = new IdGenerator()
      const id = idGenerator.generate()
      const hashManager = new HashManager()
      const hashPassword = await hashManager.hash(password)

      const newUser = new User(id, name, email, hashPassword, role)
      await userDatabase.createUser(newUser);

      const authenticator = new Authenticator()
      const token = authenticator.generate({ id, role })

      res.status(201).send({message: 'Usuário Criado com sucesso', token})

   } catch (err: any) {
      res.status(400).send({ message: err.message })
   }
}
export default signUp;