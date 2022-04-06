import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { OrderDatabase } from "../data/OrderDatabase";
import { OrderBusiness } from "../business/OrderBusiness";
import { OrderInputDTO } from "../model/Order";
import { ItemDatabase } from "../data/ItemDatabase";

const orderBusiness = new OrderBusiness(
  new IdGenerator(),
  new OrderDatabase(),
  new ItemDatabase()
);
export class OrderController {
  async createOrder(req: Request, res: Response) {
    try {
      const input: OrderInputDTO = {
        clientName: req.body.clientName,
        items: req.body.items,
      };

      const orderRequest = await orderBusiness.create(input);

      res.status(200).send(orderRequest);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
