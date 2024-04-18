const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error("Failed to get movies:", error);
    res.status(500).send("Server error");
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.json(movie);
  } catch (error) {
    console.error("Failed to get movie:", error);
    res.status(500).send("Server error");
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    console.error("Failed to create movie:", error);
    res.status(500).send("Server error");
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.json(movie);
  } catch (error) {
    console.error("Failed to update movie:", error);
    res.status(500).send("Server error");
  }
};
const uploadImage = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    movie.image = req.body.image;
    await movie.save();
    res.json(movie);
  } catch (error) {
    console.error("Failed to upload image:", error);
    res.status(500).send("Server error");
  }
};
//sort by name by  :sort is asc or desc
const sortName = async (req, res) => {
  try {
    const movie = await Movie.find().sort({ name: req.params.sortType });
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.json(movie);
  } catch (error) {
    console.error("Failed to sort image:", error);
    res.status(500).send("Server error");
  }
};
const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (error) {
    console.error("Failed to delete movie:", error);
    res.status(500).send("Server error");
  }
};

const findMovieByName = async (req, res) => {
  try {
    const movie = await Movie.find({ name: req.params.name });
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.json(movie);
  } catch (error) {
    console.error("Failed to find movie:", error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  uploadImage,
  sortName,
  findMovieByName,
};
