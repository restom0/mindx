const express = require("express");
const connectDB = require("./configs/database.js");
const routes = require("./routes"); // Import all routes
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// Middleware (e.g., body-parser)
app.use(express.json()); // Parses JSON requests

// Connect to database
connectDB();

// Mount routes
app.use("/", routes); // Base path for all API routes

// Error handling middleware (if needed)
// ...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
