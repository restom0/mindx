const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  _id: ObjectId,
  userName: String,
  email: String,
  age: Number,
  avatar: String,
});
const User = mongoose.model("Users", UserSchema);
module.exports = User;
