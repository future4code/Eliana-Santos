import express from "express";
import { MenuController } from "../controller/MenuController";


export const menuRouter = express.Router();

const menuController = new MenuController();

menuRouter.get("/", menuController.getMenu);
menuRouter.post("/", menuController.createMenu) ;