import { Response, Request } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

const getUserPurchases = async (req: Request, res: Response) => {
    try {
        const users: User[] = await connection("labecommerce_users")
        res.send(users)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getUserPurchases