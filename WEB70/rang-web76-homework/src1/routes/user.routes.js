const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
router.use(express.json());
router.get("/", userController.getUsers);
router.get("/:id", userController.getUsersById);
router.get("/email/:email", userController.getUsersByEmail);
module.exports = router;
