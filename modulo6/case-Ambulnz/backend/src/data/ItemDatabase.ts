import { BaseDatabase } from "./BaseDatabase";
import { Item } from "../model/Item";

export class ItemDatabase extends BaseDatabase {
  private static TABLE_NAME = "ITEM";

  public async getItem(): Promise<Item[]> {
    try {
      const itemRequest = await this.getConnection()
        .select("*")
        .from(ItemDatabase.TABLE_NAME);

      return itemRequest;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async createItem(
    id: string,
    qantity: number,
    pizzaId: string,
    orderId: string
  ): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id,
          qantity,
          id_pizza: pizzaId,
          id_order: orderId,
        })
        .into(ItemDatabase.TABLE_NAME);

      return "Pedido inserido com sucesso";
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
