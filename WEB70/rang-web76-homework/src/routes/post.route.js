import express from "express";
import { PostController } from "../controllers/post.controller.js";

const PostRouter = express.Router();
PostRouter.get("/", PostController.getAll);
PostRouter.get("/:id", PostController.getById);

export { PostRouter };
