import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import exercisesRoute from "./routes/exercisesRoute.js";

dotenv.config();

const app = express();
const mongoDBURL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/exercises", exercisesRoute);

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
		server.close();
	});

mongoose.connection.on("error", (error) => {
	console.error("Error connecting to MongoDB:", error);
	server.close();
});
