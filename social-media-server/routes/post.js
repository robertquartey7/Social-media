import express from "express";
import {
  createPost,
  deletePost,
  deletePosts,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";
import passport from "passport";
const router = express.Router();

router.post(
  "/post",
  passport.authenticate("jwt", {
    session: false,
  }),
  createPost
);
router.delete("/posts", deletePosts);
router.delete("/post/:post_id", deletePost);
router.get("/posts", getPosts);
router.get("/post/:post_id", getPost);
router.put("/post/:post_id", updatePost);

export default router;
