export class Menu {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private ingredients: string,

    ) { }

    static toMenuModel(user: any): Menu {
        return new Menu(user.id, user.name, user.price, user.ingredients);
    }
}
export interface MenuInputDTO {
    name: string;
    price: number;
    ingredients: string;

}
export interface MenuInsertDTO extends MenuInputDTO {
    id: string;
}
