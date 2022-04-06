import { IdGenerator } from "../services/IdGenerator";
import { FieldsToComplet } from "../error/FieldsToComplet";
import { ItemDatabase } from "../data/ItemDatabase";
import { ItemRequestInputDTO } from "../model/ItemRequest";

export class ItemBusiness {
  constructor(
    private itemDatabase: ItemDatabase,
    private idGenerator: IdGenerator
  ) {}

  async createMenu(item: ItemRequestInputDTO) {
    const id = this.idGenerator.generate();
    if (!item.pizzaId || !item.quantity && item.quantity !== 0) {
      throw new FieldsToComplet();
    }

    if (item.quantity <= 0) {
      throw new Error("O preço não pode ser menor ou igual a 0");
    }

    const result = await this.itemDatabase.createItem(
      id,
      item.quantity,
      item.pizzaId
    );

    return result;
  }

  async getItemRequest() {
    const itemDatabase = new ItemDatabase();
    const itemFromDB = await itemDatabase.getItem();

    return itemFromDB;
  }
}
