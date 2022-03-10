import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Recipe } from "../types/Recipes";

const createRecipe = async (req: Request, res: Response) => {
   try {
      const token = req.headers.authorization

      const idGenerator = new IdGenerator()
      const id = idGenerator.generate()

      const authenticator = new Authenticator()
      const tokenData = authenticator.getTokenData(token as string)

      const { title, description } = req.body
      if (!token) {
         res.status(422)
         .send('Esse endepoint exige uma autorização a ser passada nos headers');
      }
      
      if (!title || !description) {
         res.status(422).send("Insira corretamente as informações")
      }
            
      const creatAt = new Date()
      const newRecipe = new Recipe(id, title, description, creatAt, tokenData.id )

      const userDatabase = new RecipeDatabase()
      await userDatabase.createRecipe(newRecipe);

      res.status(201).send({ message: 'Receita Criado com sucesso', token })

   } catch (err: any) {
      res.status(400).send({ message: err.message })
   }
}
export default createRecipe;