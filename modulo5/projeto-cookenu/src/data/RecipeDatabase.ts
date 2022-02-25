import { Recipe } from "../types/Recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection('Recipes')
                .insert({
                    id: recipe.getIdRecipe(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    creatAt: recipe.getData(),
                    id_user: recipe.getIdUser()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipeById(id: string): Promise<Recipe[]> {
        try {
            const recipes = await BaseDatabase.connection('Recipes')
                .select('id', 'title', 'description', 'creatAt')
                .where({id})

            return recipes;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

 
}