import { IdGenerator } from "../services/IdGenerator";
import { FieldsToComplet } from "../error/FieldsToComplet";
import { ItemDatabase } from "../data/ItemDatabase";
import { ItemInputDTO } from "../model/Item";

export class ItemBusiness {
  constructor(
    private itemDatabase: ItemDatabase,
    private idGenerator: IdGenerator
  ) {}

  async getItem() {
 
    const itemDatabase = new ItemDatabase();
    const itemFromDB = await itemDatabase.getAllByOrderId("");

    return itemFromDB;
  }
}
