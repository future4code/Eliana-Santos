export class Item {

  public getId(): string {
    return this.id;
  }

  public getQantity(): number {
    return this.qantity;
  }

  public getPizzaId(): string {
    return this.pizzaId;
  }

  public getOrderId(): string {
    return this.orderId;
  }

  constructor(
    private id: string,
    private qantity: number,
    private pizzaId: string,
    private orderId: string
  ) {}

  static toItemModel(item: any): Item {
    return new Item(item.id, item.qantity, item.pizzaId, item.orderId);
  }
}

export interface ItemInputDTO {
  qantity: number;
  pizzaId: string;
  orderId: string;
}

export interface ItemRequestInsertDTO extends ItemInputDTO {
  id: string;
}
