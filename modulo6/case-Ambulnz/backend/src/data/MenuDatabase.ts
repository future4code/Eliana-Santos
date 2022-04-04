import { BaseDatabase } from "./BaseDatabase";
import { Menu } from "../model/Menu";

export class MenuDatabase extends BaseDatabase {
  private static TABLE_NAME = "MENU";

  public async getAllMenu(): Promise<Menu[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(MenuDatabase.TABLE_NAME)
        .finally(() => {
          BaseDatabase.destroyConnection();
        });

      const menu = result.map((menu) => {
        return Menu.toMenuModel(menu);
      });
      return menu;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async insertProduct(
    id: string,
    name: string,
    price: number,
    ingredients: string[]
  ): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          price,
          ingredients: ingredients.join()
        })
        .into(MenuDatabase.TABLE_NAME);

      return "Pizza inserida com sucesso";
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
