import { Request, Response } from "express";
import { UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class UserController {
    async signup(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                participation: req.body.participation,
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getUsers(req: Request, res: Response) {

        try {

         

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail();

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}