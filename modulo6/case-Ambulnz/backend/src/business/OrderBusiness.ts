import { IdGenerator } from "../services/IdGenerator";
import { FieldsToComplet } from "../error/FieldsToComplet";
import { OrderDatabase } from "../data/OrderDatabase";
import { OrderInputDTO, OrderInsertDTO } from "../model/Order";
import { ItemDatabase } from "../data/ItemDatabase";

export class OrderBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private orderDatabase: OrderDatabase,
    private itemDataBase: ItemDatabase
  ) {}

  async create(order: OrderInputDTO) {
    const id = this.idGenerator.generate();
    if (!order.clientName || (!order.items && order.items !== 0)) {
      throw new FieldsToComplet();
    }

    if (Number(order.items) <= 0) {
      throw new Error("A quantidade não pode ser menor ou igual a 0");
    }

    const result = await this.orderDatabase.createOrder(
      id,
      order.clientName,
      new Date()
    );

    order.items.forEach(async (item) => {

      await this.itemDataBase.createItem(
        this.idGenerator.generate(),
        item.qantity,
        item.pizzaId,
        id
      );

    });

    return result;
  }

     async getById(input: string) {

        const id = input

        const itemDatabase = new ItemDatabase();
        const orderFromDB = await itemDatabase.getAllByOrderId(id);

        return orderFromDB

    } 
}
