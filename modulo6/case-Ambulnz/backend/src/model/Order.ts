export class Order {
  public getId(): string {
    return this.id;
  }
  public getClientName() {
    return this.clientName;
  }
  public getDate() {
    return this.date;
  }
  public getItemRequestId() {
    return this.itemRequestId;
  }
  constructor(
    private id: string,
    private clientName: string,
    private date: Date,
    private itemRequestId: string
  ) {}

  static toOrderRequestModel(order: any): Order {
    return new Order(
      order.id,
      order.clientName,
      order.date,
      order.itemRequestId
    );
  }
}
export interface OrderRequestInputDTO {
  clientName: string;
  date: Date;
}
export interface OrderRequestInsertDTO extends OrderRequestInputDTO {
  id: string;
}
