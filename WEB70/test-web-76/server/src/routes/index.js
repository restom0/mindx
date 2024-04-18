const express = require("express");
const router = express.Router();

const moviesRouter = require("./movie");
const usersRouter = require("./user");
router.use("/movies", moviesRouter);
router.use("/users", usersRouter);

module.exports = router;
