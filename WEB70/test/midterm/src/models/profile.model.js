const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skills: [String],
  hobbies: String,
  goals: [String],
});
const Profile = mongoose.model("Users", ProfileSchema);
module.exports = Profile;
