import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator} from "../services/IdGenerator";
import { Recipe } from "../types/Recipes";

const createRecipe = async (req: Request, res: Response) => {
   try {

      const { title, description } = req.body
      if (!title || !description) {
         res.status(422).send("Insira corretamente as informações")
      }
  
      const userDatabase = new RecipeDatabase()
      const recipes = await userDatabase.createRecipe(0)
      if (recipes) {
         res.status(409).send('Esse email já está cadastrado!')
      }

      const idGenerator = new IdGenerator()
      const id = idGenerator.generate()
  

      const newRecipe = new Recipe(id,title, description, data_da_criacao)
      await userDatabase.createRecipe(newRecipe);

      const authenticator = new Authenticator()
      const token = authenticator.generate(id)

      res.status(201).send({message: 'Receita Criado com sucesso', token})

   } catch (err: any) {
      res.status(400).send({ message: err.message })
   }
}
export default createRecipe;