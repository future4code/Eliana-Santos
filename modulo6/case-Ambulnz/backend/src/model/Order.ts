import { Item, ItemInputDTO } from "./Item";

export class Order {

  public getId(): string {
    return this.id;
  }

  public getClientName(): string {
    return this.clientName;
  }

  public getDate(): Date {
    return this.date;
  }

  public getItems(): Item[] {
    return this.items;
  }

  constructor(
    private id: string,
    private clientName: string,
    private date: Date,
    private items: Item[]
  ) {}

  static toOrderRequestModel(order: any): Order {
    return new Order(order.id, order.clientName, order.date, order.items);
  }
}

export interface OrderInputDTO {
  clientName: string;
  items: ItemInputDTO[];
}

export interface OrderInsertDTO extends OrderInputDTO {
  id: string;
}
