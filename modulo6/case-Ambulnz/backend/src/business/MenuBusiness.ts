
import { IdGenerator } from "../services/IdGenerator";
import { FieldsToComplet } from "../error/FieldsToComplet";
import { MenuDatabase } from "../data/MenuDatabase";
import { MenuInputDTO } from "../model/Menu";

export class MenuBusiness {
    constructor(
        private menuDatabase: MenuDatabase,
        private idGenerator: IdGenerator
    ) { }

    async createMenu(menu: MenuInputDTO) {
        const id = this.idGenerator.generate()
        if (!menu.name || !menu.ingredients || !menu.price && menu.price !== 0) {
            throw new FieldsToComplet()
        }
    
        if (menu.price <= 0) {
            throw new Error('O preço não pode ser menor ou igual a 0')
        }

        const result = await this.menuDatabase.insertProduct(id, menu.name, menu.price, menu.ingredients);

        return result
    }

    async getMenu() {

        const menuDatabase = new MenuDatabase();
        const menuFromDB = await menuDatabase.getAllMenu();

        return menuFromDB

    }
}