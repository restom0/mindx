const express = require("express");
const MovieController = require("../controllers/movies");
const router = express.Router();

router.use(express.json());
router.get("/", MovieController.getMovies);
router.get("/:id", MovieController.getMovieById);
router.post("/", MovieController.createMovie);
router.put("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);
router.put("/upload/:id", MovieController.uploadImage);
router.get("/sort/:sortType", MovieController.sortName);
router.get("/name/:name", MovieController.findMovieByName);
module.exports = router;
