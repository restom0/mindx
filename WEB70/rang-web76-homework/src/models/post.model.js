import mongoose from "mongoose";
import { USER_MODEL_NAME } from "./user.model.js";
const { Schema, ObjectId } = mongoose;
const POST_MODEL_NAME = "posts";
const PostSchema = new Schema({
  _id: ObjectId,
  id: String,
  content: { type: String, required: true },
  authorId: { type: ObjectId, ref: USER_MODEL_NAME },
});
const PostModel = mongoose.model(POST_MODEL_NAME, PostSchema);
export { PostModel, POST_MODEL_NAME };
