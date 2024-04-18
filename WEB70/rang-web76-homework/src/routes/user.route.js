import express from "express";
import { UserController } from "../controllers/user.controller.js";
import { checkApiKey } from "../middleware/authentication.middleware.js";
import { checkRoleForOnlyUser } from "../middleware/authorization.middleware.js";

const UserRouter = express.Router();

UserRouter.get("/", checkApiKey, checkRoleForOnlyUser, UserController.getAll);

UserRouter.post("/register", UserController.register);

UserRouter.post(
  "/:userId/post/:postId/comment",
  checkApiKey,
  checkRoleForOnlyUser,
  UserController.commentOnPostByPostId
);

export { UserRouter };
