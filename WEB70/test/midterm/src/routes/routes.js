const UserRouter = require("./user.routes");
const ProfileRouter = require("./profile.routes");
function route(app) {
  app.use("/users", UserRouter);
  app.use("/profile", ProfileRouter);
}
module.exports = route;
