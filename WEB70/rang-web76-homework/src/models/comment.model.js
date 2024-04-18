import mongoose from "mongoose";
import { POST_MODEL_NAME } from "./post.model.js";
import { USER_MODEL_NAME } from "./user.model.js";
const { Schema, ObjectId } = mongoose;
const COMMENT_MODEL_NAME = "comments";
const CommentSchema = new Schema({
  _id: ObjectId,
  id: String,
  postId: { type: ObjectId, ref: POST_MODEL_NAME },
  content: String,
  authorId: { type: ObjectId, ref: USER_MODEL_NAME },
});
const CommentModel = mongoose.model(COMMENT_MODEL_NAME, CommentSchema);
export { CommentModel, COMMENT_MODEL_NAME };
