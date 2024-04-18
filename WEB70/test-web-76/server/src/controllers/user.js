const User = require("../models/User");

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }
    req.session.user = user;
    res.status(200).json({ message: "Login successful" });
  });
};

const logout = (req, res) => {
  req.session.user = null;
  res.status(200).json({ message: "Logout successful" });
};

module.exports = {
  login,
  logout,
};
