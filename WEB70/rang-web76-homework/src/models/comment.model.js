import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;

const CommentSchema = new Schema({
  _id: ObjectId,
  id: String,
  postId: ObjectId,
  content: String,
  authorId: ObjectId,
});
const CommentModel = mongoose.model("comments", CommentSchema);
export default CommentModel;
