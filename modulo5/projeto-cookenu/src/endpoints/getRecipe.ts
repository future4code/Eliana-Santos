import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

const getRecipe = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization
        const {id } = req.params

        if (!token) {
            res.status(422)
            .send('Esse endepoint exige uma autorização a ser passada nos headers');
        }
     
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token as string)

        if (!tokenData.id) {
            res.status(401)
            .send("Somente usuários logados podem acessar essa funcionalidade")
        }
        const userDatabase = new RecipeDatabase()
           
        res.status(200).send( await userDatabase.getRecipeById(id))

    } catch (err: any) {
        res.status(400).send({ message: err.message })
    }
}
export default getRecipe;