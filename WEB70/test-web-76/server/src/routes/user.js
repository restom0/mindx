//login and logout routes
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
router.use(express.json());
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
module.exports = router;
