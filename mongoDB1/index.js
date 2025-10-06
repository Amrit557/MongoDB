const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/productdb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Product routes
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
