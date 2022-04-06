import express from "express";


export const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get("/", orderController.getOrder);
orderRouter.get("/:id", orderController.getOrderById);

orderRouter.post('/',)