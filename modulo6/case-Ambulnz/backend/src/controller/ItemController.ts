import { Request, Response } from "express";
import { ItemBusiness } from "../business/ItemBussiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ItemDatabase } from "../data/ItemDatabase";
import { ItemInputDTO } from "../model/Item";
import { IdGenerator } from "../services/IdGenerator";

const itemBusiness = new ItemBusiness(new ItemDatabase(), new IdGenerator());
export class ItemController {

  async getItem(req: Request, res: Response) {
    try {
      const itemBusiness = new ItemBusiness(
        new ItemDatabase(),
        new IdGenerator()
      );
      const result = await itemBusiness.getItem();

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
