import { Router } from "express";
import UserController from "../controller/UserController";

export const useRouter = Router()
const userController =  new UserController

useRouter.post("/signup", userController.signup)
useRouter.post("/login", userController.login)
