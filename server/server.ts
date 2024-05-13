import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)),
  )
  .catch((error: Error) => console.log(error.message));

// Default route for testing the server
app.get("/", (req: Request, res: Response) => res.send("Hello from Express"));
