import { Request, Response } from "express";
import connection from "../data/connection";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email && !password) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'email' ou 'password'"
         throw new Error()
      }

      await connection('User')
         .update({ email, password })
         .where({ id: req.params.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}