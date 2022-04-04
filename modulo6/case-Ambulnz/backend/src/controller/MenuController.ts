import { Request, Response } from "express";
import { MenuInputDTO } from "../model/Menu";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { MenuDatabase } from "../data/MenuDatabase";
import { MenuBusiness } from "../business/MenuBusiness";

const menuBusiness = new MenuBusiness(
    new MenuDatabase(),
    new IdGenerator()
);
export class MenuController {
    async createMenu(req: Request, res: Response) {
        try {

            const input: MenuInputDTO = {
                name: req.body.name,
                price: req.body.price,
                ingredients: req.body.ingredients,
            }

            const result = await menuBusiness.createMenu(input);

            res.status(200).send(result);

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getMenu(req: Request, res: Response) {

        try {

            const menuBusiness = new MenuBusiness(
                new MenuDatabase,
                new IdGenerator
            );
            const result = await menuBusiness.getMenu();

            res.status(200).send(result);

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}