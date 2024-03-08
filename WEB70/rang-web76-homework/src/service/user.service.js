import { DB_CONFIG } from "../configs/db.config.js";
import { ApiUtils } from "../utils/api.util.js";
import { API_METHOD } from "../utils/api.enum.js";
import { v4 } from "uuid";
import { UserDTO } from "../dto/user.dto.js";
import { CommentDTO } from "../dto/comment.dto.js";
import { CommonUtils } from "../utils/common.util.js";
import { ERROR_MSG } from "../constants/errorMessage.constant.js";
import { PostService as postService } from "./post.service.js";
import UserModel from "../models/user.model.js";

const userUrl = DB_CONFIG.baseUrl + DB_CONFIG.resources.user.contextPath;

async function getAllUsers() {
  return await UserModel.find({});
}

async function getById(id) {
  return await UserModel.findById(id);
}

async function registerUser(user) {
  if (user instanceof UserDTO === false) {
    throw new Error("Invalid user object");
  }

  user.id = userIdGenerator();

  const newUser = await UserModel.create(user);
  if (!newUser) {
    throw new Error("Failed to register user");
  }

  return newUser;
}

async function commentOnPostByPostId(comment, userId, postId) {
  if (!(comment instanceof CommentDTO)) {
    throw new Error("Invalid comment object");
  }

  const user = await getById(userId);

  if (CommonUtils.checkNullOrUndefined(user)) {
    throw new BadRequestError(ERROR_MSG.POST_NOT_FOUND + userId);
  }

  comment.authorId = user.id;

  // Check thêm field nào require và format gì thêm vào nếu nghiệp vụ yêu cầu
  // không thì thôi insert luôn
  return await postService.addPostComment(comment, postId);
}

function userIdGenerator() {
  return "US" + v4();
}

export const UserService = {
  registerUser,
  getAllUsers,
  commentOnPostByPostId,
};
