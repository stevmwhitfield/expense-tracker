require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Create app with CORS and JSON
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const categoryRoute = require("./routes/CategoryRoute");
app.use("/category", categoryRoute);

// Invalid routes - error 404
app.use((req, res) => {
  res.status(404).send("Error 404: Page not found.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).send(err.stack);
});
