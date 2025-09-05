const express = require("express");
const mongoose = require("mongoose");
const tasksRoute = require("./routes/tasks");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", tasksRoute);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/tasksDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
