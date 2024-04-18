const User = require("../models/user.model");
const bcrypt = require("bcrypt");
class UserService {
  async register(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
  }
  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }
  }
}
module.exports = new UserService();
