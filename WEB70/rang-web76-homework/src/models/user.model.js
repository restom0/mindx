import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;
const USER_MODEL_NAME = "users";
export const UserSchema = new Schema({
  _id: ObjectId,
  id: String,
  userName: String,
});

const UserModel = mongoose.model(USER_MODEL_NAME, UserSchema);
export { UserModel, USER_MODEL_NAME };
