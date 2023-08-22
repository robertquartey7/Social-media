import mongoose from "mongoose";

const friend = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_verified: {
      type: String,
      default: false,
    },
    resetToken: String,
    resetTokenExpiry: Date,
    friends: [friend],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
