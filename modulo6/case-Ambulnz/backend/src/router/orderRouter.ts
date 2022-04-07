import express from "express";
import { OrderController } from "../controller/OrderController";

export const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get("/:id", orderController.getOrder);
orderRouter.post("/", orderController.createOrder);
