import { Request, Response } from "express";
import connection from "../data/connection";
import { hash } from "../generateHash";
import { Authenticator } from "../services/Auth";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { user } from "../types";

const createUser = async (req: Request, res: Response) => {
   try {

      const { email, password } = req.body

      if (!email || email.indexOf("@") === -1) {
         res.statusCode = 422
         throw new Error("Invalid email, missing @");
      }
      if (!password || password.length < 6) {
         res.statusCode = 422
         throw new Error("Invalid password, enter 6 or more characters");
      }

      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerator().generatedId()
      const cypherPassword: string = new HashManager().createHash(password)

      const newUser: user = {
         id,
         email,
         password:cypherPassword
      }

      await connection('User').insert(newUser)

      const authenticator: Authenticator = new Authenticator()
      const token = authenticator.GenerateToken({ id: newUser.id })

      res.status(201).send({ token })

   } catch (error: any) {
      res.status(400).send({ message: error.message })
   }
}
export default createUser;