// server.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed:", error);
  });
