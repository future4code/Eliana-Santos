import { Request, Response } from "express";
import { MenuInputDTO } from "../model/Menu";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { MenuDatabase } from "../data/MenuDatabase";
import { MenuBusiness } from "../business/MenuBusiness";
import { OrderDatabase } from "../data/OrderDatabase";
import { OrderBusiness } from "../business/OrderBusiness";
import { ItemRequestInputDTO } from "../model/ItemRequest";

const orderBusiness = new OrderBusiness(
    new OrderDatabase(),
    new IdGenerator()
);
export class OrderController {
    async createItem(req: Request, res: Response) {
        try {

            const input: ItemRequestInputDTO = {
                quantity: req.body.quantity
            }

            const itemRequest = await orderBusiness.createItem(input);

            res.status(200).send(itemRequest);

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async createOrder(req: Request, res: Response) {

        try {

            const input: ItemRequestInputDTO = {
                quantity: req.body.quantity
            }

            const order = await orderBusiness.createOrder(input);

            res.status(200).send(order);

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}