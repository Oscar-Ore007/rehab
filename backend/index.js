// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose
	.connect(process.env.mongoDBURL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

// Create Express app
const app = express();

// Define routes and middleware
// ...

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
