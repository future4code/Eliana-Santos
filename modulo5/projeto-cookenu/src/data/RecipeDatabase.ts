import { Recipe } from "../types/Recipes";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe): Promise<any> {
        try {
            await BaseDatabase.connection('Recipe')
                .insert({
                    id: recipe.getIdRecipe(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    data_da_criacao: recipe.getData(),
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipe(): Promise<Recipe[]> {
        try {
            const recipes = await BaseDatabase.connection('Recipes')
                .select('id', 'title', 'description', 'data_da_criacao')

            return recipes.find(recipe => Recipe.toRecipeModel(recipe))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }


}