import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;

export const UserSchema = new Schema({
  _id: ObjectId,
  id: String,
  userName: String,
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
