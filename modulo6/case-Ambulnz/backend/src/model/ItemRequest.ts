export class ItemRequest {
  public getId(): string {
    return this.id;
  }
  public getQuantity() {
    return this.quantity;
  }
  public getPizzaId() {
    return this.pizzaId;
  }
  constructor(
    private id: string,
    private quantity: number,
    private pizzaId: string
  ) {}

  static toItemRequestModel(item: any): ItemRequest {
    return new ItemRequest(item.id, item.quantity, item.pizzaId);
  }
}
export interface ItemRequestInputDTO {
  quantity: number;
  pizzaId: string;
}
export interface ItemRequestInsertDTO extends ItemRequestInputDTO {
  id: string;
}
