import { Router } from "express";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";
const router = Router();

/* CREATE POST  */
export const createPost = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findOne({
      _id: id,
    });

    if (user) {
      const post = new Post({
        title: req.body.title || null,
        text: req.body.text || null,
        imageUrl: req.body.imageUrl || null,
        user: user._id,
        Comment: [],
      });

      await post.save();

      if (post) {
        res.status(201).json({
          message: "Post created",
          post,
        });
      }
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
/* GET ONE POST */
export const getPost = async (req, res) => {
  try {
    const postId = req.params.post_id;

    const post = await Post.findOne({
      _id: postId,
    })
      .populate("user")
      .populate("comments");
    if (post) {
      res.status(200).json({
        post,
      });
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
/* GET ALL POSTS */
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user").populate("comments");

    if (posts) {
      res.status(200).json({
        posts,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
/* UPDATING POST */
export const updatePost = async (req, res) => {
  try {
    const postUpdate = Post.updateOne(
      {
        _id: req.params.post_id,
      },
      {
        ...req.body,
      }
    );

    if (postUpdate) {
      res.status(200).json({
        postUpdate,
      });
    } else {
      res.status(404).json({
        message: error.message,
      });
    }
  } catch (error) {}
};
/* DELETE ONE POST */
export const deletePost = async (req, res) => {
  try {
    const postId = req.params.post_id;

    const post = await Post.deleteOne({
      _id: postId,
    });

    if (post) {
      res.status(200).json({
        message: "deleted",
      });
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
/* DELETE ALL POST */
export const deletePosts = async (req, res) => {
  try {
    const posts = await Post.deleteMany();

    if (posts) {
      res.status(200).json({
        message: "deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
