const userService = require("../service/user.service");
class UserController {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      await userService.register(email, password);
      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const result = await userService.login(email, password);
      if (!result) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign({ userId: user._id }, "secret", {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new UserController();
