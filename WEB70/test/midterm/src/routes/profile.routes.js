const express = require("express");
const ProfileController = require("../controllers/profile.controller");
const authenticateToken = require("../middlewares/authen.middleware");
const router = express.Router();

router.use(express.json());

router.get("/:id", authenticateToken, ProfileController.getProfile);
router.put("/:id", authenticateToken, ProfileController.updateProfile);
router.delete("/:id", authenticateToken, ProfileController.deleteProfile);

module.exports = router;
