import express from "express";
import { SERVER_CONFIG } from "./src/configs/server.config.js";
import { UserRouter } from "./src/routes/user.route.js";
import mongoose from "mongoose";
import { DB_CONFIG } from "./src/configs/db.config.js";
import { PostRouter } from "./src/routes/post.route.js";
import { errorHandler } from "./src/middleware/errorHandling.middleware.js";

const DB_CONNECTION_STRING =
  "mongodb+srv://" +
  DB_CONFIG.username +
  ":" +
  DB_CONFIG.password +
  "@cluster0.lcj2oyv.mongodb.net/web-70-blog";

const app = express();

app.use(express.json());

app.use(SERVER_CONFIG.RESOURCES.USER.CONTEXT_PATH, UserRouter);
app.use(SERVER_CONFIG.RESOURCES.POST.CONTEXT_PATH, PostRouter);
app.use(errorHandler);
(async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("Connected to MongoDB");
    app.listen(SERVER_CONFIG.PORT, () => {
      console.log(`Example app listening on port ${SERVER_CONFIG.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
