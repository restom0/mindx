const userService = require("../service/user.service");

const findUserByX = (x, value) => {
  return users.find((user) => user[x] === value);
};
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REQUEST_4XX_INVALID_REQ_ERR_MSG = "Request argument was invalid!";
const REQUEST_4XX_USER_NOTFOUND_REQ_ERR_MSG = "User not found";
class UserControler {
  async getUsers(req, res, next) {
    res.status(200).json({ data: userService.getUsers() });
  }

  async getUsersById(req, res, next) {
    const id = req.params.id;

    if (id === undefined || id === null) {
      return res.status(400).json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG });
    }

    const user = findUserByX("id", id);

    if (user === undefined || user === null) {
      return res
        .status(400)
        .json({ message: REQUEST_4XX_USER_NOTFOUND_REQ_ERR_MSG });
    }

    res.status(200).json({ data: user });
  }
  async getUsersByEmail(req, res, next) {
    const userEmail = req.params.email;
    console.log(userEmail);
    if (userEmail === undefined || userEmail === null) {
      return res.status(400).json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG });
    }
    if (!new RegExp(emailRegex).test(userEmail)) {
      return res.status(400).json({ message: REQUEST_4XX_INVALID_REQ_ERR_MSG });
    }
    const user = findUserByX("email", userEmail);

    if (user === undefined || user === null) {
      res.status(404).json({ message: REQUEST_4XX_USER_NOTFOUND_REQ_ERR_MSG });
    }

    res.status(200).json({ data: user });
  }
}
module.exports = new UserControler();
