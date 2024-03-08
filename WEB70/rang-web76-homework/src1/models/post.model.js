const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  ref: "id",
  postId: ObjectId,
  content: String,
  createdAt: Date,
  isPublic: Boolean,
});
const Post = mongoose.model("Posts", PostSchema);
module.exports = Post;
