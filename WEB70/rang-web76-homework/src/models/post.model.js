import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;

const PostSchema = new Schema({
  _id: ObjectId,
  id: String,
  content: String,
  authorId: ObjectId,
});
const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;
