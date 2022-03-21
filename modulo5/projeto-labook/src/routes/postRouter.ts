import { Router } from "express";
import PostController from "../controller/PostController";

export const postRouter = Router()
const postController =  new PostController()

postRouter.post("/", postController.createPost)
postRouter.get("/:id", postController.getPostById) 
