import express from "express";
import { SERVER_CONFIG } from "./src/configs/server.config.js";
import { UserRouter } from "./src/routes/user.route.js";
import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://thaingocrang2014:wh3rhS2eaeh5rQNK@cluster0.lcj2oyv.mongodb.net/web-70-blog"
  )
  .then(() => console.log("Connected to MongoDB"));
const app = express();

app.use(express.json());

app.use(SERVER_CONFIG.RESOURCES.USER.CONTEXT_PATH, UserRouter);

app.listen(SERVER_CONFIG.PORT, () => {
  console.log(`Example app listening on port ${SERVER_CONFIG.PORT}`);
});
