import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import setupJWTStrategy from "./auth/index.js";
import passport from "passport";
import cors from "cors";
import morgan from "morgan";
export const app = express();

app.use(express.json());
app.use(cors);

/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("connection failed");
  });

/* SETTING UP JWT STRATEGY */

setupJWTStrategy(passport);

app.use("/api", morgan("tiny"));

app.get("/api", (req, res) => {
  res.send("welcome to McChat");
});
