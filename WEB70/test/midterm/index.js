// Import các modules cần thiết
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./src/routes/routes");
const app = express();
app.use(bodyParser.json());
route(app);
mongoose
  .connect(
    "mongodb+srv://thaingocrang2014:wh3rhS2eaeh5rQNK@cluster0.lcj2oyv.mongodb.net/web-70-blog"
  )
  .then(() => console.log("Connected to MongoDB"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
