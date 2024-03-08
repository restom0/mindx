const UserRouter = require("./user.routes");
const CommentRouter = require("./comment.routes");
function route(app) {
  app.use("/users", UserRouter);
  app.use("/comments", CommentRouter);
}
module.exports = route;
