import { Post } from "../models/post.js";
import { Comment } from "../models/comment.js";
export const createComment = async (req, res) => {
  try {
    const postId = req.params.post_id;
    console.log(postId);
    const post = await Post.findOne({
      _id: postId,
    }).populate("user");
    console.log(post);
    if (post) {
      const createComment = await new Comment({
        comment: req.body.comment,
        user: post.user._id,
        post: post._id,
      });

      await createComment.save();

      if (createComment) {
        return res.status(201).json({
          message: "comment created",
          createComment,
        });
      } else {
        return res.status(404).json({
          message: error.message,
        });
      }
    } else {
      res.status(404).json({
        message: error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
/* GET ONE COMMENT */
export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      _id: req.params.comment_id,
    })
      .populate("user")
      .populate("post");

    if (comment) {
      res.status(200).json({
        comment,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
/* get all comments */
export const getComments = async (_req, res) => {
  try {
    const comments = await Comment.find({}).populate("post").populate("user");
    if (comments) {
      return res.status(200).json({
        comments,
      });
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteComment = async (req, res) => {};
export const deleteComments = async (req, res) => {};
export const updateComment = async (req, res) => {};
