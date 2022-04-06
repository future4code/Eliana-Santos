export class Menu {
  public getId(): string {
    return this.id;
  }
  public getName():string {
    return this.name;
  }
  public getPrice():number {
    return this.price;
  }
  public getIngredients():string[] {
    return this.ingredients;
  }
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private ingredients: string[]
  ) {}
  static toMenuModel(menu: any): Menu {
    return new Menu(menu.id, menu.name, menu.price, menu.ingredients);
  }
}
export interface MenuInputDTO {
  name: string;
  price: number;
  ingredients: string[];
}
export interface MenuInsertDTO extends MenuInputDTO {
  id: string;
}
