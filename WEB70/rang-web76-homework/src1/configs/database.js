const mongoose = require("mongoose");
const connectToDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://thaingocrang2014:wh3rhS2eaeh5rQNK@cluster0.lcj2oyv.mongodb.net/web-70-blog"
    )
    .then(() => console.log("Connected to MongoDB"));
};
module.exports = connectToDB;
