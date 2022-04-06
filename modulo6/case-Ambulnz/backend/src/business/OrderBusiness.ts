
import { IdGenerator } from "../services/IdGenerator";
import { FieldsToComplet } from "../error/FieldsToComplet";
import { OrderDatabase } from "../data/OrderDatabase";

export class OrderBusiness {
    constructor(
        private oderDatabase: OrderDatabase,
        private idGenerator: IdGenerator
    ) { }


    async getMenu() {

        const menuDatabase = new MenuDatabase();
        const menuFromDB = await menuDatabase.getAllMenu();

        return menuFromDB

    }
}