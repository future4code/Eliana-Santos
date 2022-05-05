import { Order } from "../model/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  private static TABLE_NAME = "ORDER_REQUEST";

  public async getOrderById(id: string): Promise<Order[]> {
    try {
      const orderRequest = await this.getConnection()
        .select("*")
        .from(OrderDatabase.TABLE_NAME)
        .where({ id });

      return orderRequest;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async createOrder(
    id: string,
    clientName: string,
    date: Date
  ): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id,
          client_Name: clientName,
          create_at: date,
        })
        .into(OrderDatabase.TABLE_NAME);

      return "Ordem do pedido realizado com sucesso";
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
