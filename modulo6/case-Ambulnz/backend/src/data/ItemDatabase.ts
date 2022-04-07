import { BaseDatabase } from "./BaseDatabase";
import { Item } from "../model/Item";

export class ItemDatabase extends BaseDatabase {
  private static TABLE_NAME = "ITEM";
  private static TABLE_MENU = "MENU";
  private static TABLE_ORDER = "ORDER_REQUEST";

  public async getAllByOrderId(orderId: string): Promise<Item[]> {
    try {
      const itemRequest = await this.getConnection()
        .select("o.client_Name", "m.name", "i.qantity", "o.create_at")
        .from(`ORDER_REQUEST`)
        .innerJoin(`ITEM`, function () {
          this.on("i.id_order", "=", "o.id");
        })
        .innerJoin(`MENU `, function () {
          this.on("m.id", "=", "i.id.pizza");
        });

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
