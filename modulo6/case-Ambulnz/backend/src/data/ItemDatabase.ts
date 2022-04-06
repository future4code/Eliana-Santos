import { BaseDatabase } from "./BaseDatabase";
import { ItemRequest } from "../model/ItemRequest";

export class ItemDatabase extends BaseDatabase {
  private static TABLE_NAME = "ITEM_REQUEST";

  public async getItem(id: string): Promise<ItemRequest[]> {
    try {
      const itemRequest = await this.getConnection()
        .select("*")
        .from(ItemDatabase.TABLE_NAME)
        .where({ id });

      return itemRequest;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  
  public async createItem(
    id: string,
    quantity: number,
    pizzaId: string
  ): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id,
          quantity,
          pizzaId,
        })
        .into(ItemDatabase.TABLE_NAME);

      return "Pedido inserido com sucesso";
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
