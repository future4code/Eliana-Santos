import { Request, Response } from "express";
import { ItemBusiness } from "../business/ItemBussiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ItemDatabase } from "../data/ItemDatabase";
import { ItemRequestInputDTO } from "../model/ItemRequest";
import { IdGenerator } from "../services/IdGenerator";

const itemBusiness = new ItemBusiness(new ItemDatabase(), new IdGenerator());
export class MenuController {
  async createItem(req: Request, res: Response) {
    try {
      const input: ItemRequestInputDTO = {
        quantity: req.body.quantity,
        pizzaId: req.body.pizzaId,
      };

      const result = await itemBusiness.createMenu(input);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getMenu(req: Request, res: Response) {
    try {
      const itemBusiness = new ItemBusiness(
        new ItemDatabase(),
        new IdGenerator()
      );
      const result = await itemBusiness.getItemRequest();

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
