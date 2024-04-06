import express from "express";
import { PORT } from "./config.js";

const dotenv = require("dotenv");

const url = process.env.mongoDBURL;

const app = express();
