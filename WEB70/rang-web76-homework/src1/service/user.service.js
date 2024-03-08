const User = require("../../test/lesson3/src/models/user.model");

const user = new User();
class UserService {
  async getUsers(req, res, next) {
    const result = await user.find({});
    return result;
  }

  async getUsersById(req, res, next) {
    const id = req.params.id;

    const user = findUserByX("id", id);
  }
  async getUsersByEmail(req, res, next) {
    const userEmail = req.params.email;
  }
}
module.exports = new UserService();
