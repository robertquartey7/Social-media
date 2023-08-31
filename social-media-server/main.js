import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import setupJWTStrategy from "./auth/index.js";
import passport from "passport";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authentication.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import commentRoutes from "./routes/comment.js";
export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*", // Replace with your frontend's origin
    methods: ["GET", "POST", "OPTIONS"], // Add any other HTTP methods your app uses
    allowedHeaders: ["Content-Type", "Authorization"], // Add headers your app sends
  })
);

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
    console.log(err.message);
    console.log("connection failed");
  });

/* SETTING UP JWT STRATEGY */

setupJWTStrategy(passport);

app.use("/api", morgan("tiny"));
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", commentRoutes);

app.get("/api", (req, res) => {
  return res.json("welcome to McChat");
});
