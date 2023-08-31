import express from "express";
import {
  createComment,
  getComment,
  getComments,
} from "../controllers/comment.js";

const router = express.Router();

router.get("/comments", getComments);
router.get("/post/:post_id/comment", getComment);
router.post("/post/:post_id/comment", createComment);

export default router;
