import { User } from "../models/user.js";
import nodemailer from 'nodemailer'
/* Sign up new users */
export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = new User({
      email,
      firstName,
      lastName,
      password,
    });

    await newUser.save().then(() => {
      res.status(201).json({
        success: true,
        message: "User created",
      });
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* logging in a user */
export const login = async (req, res) => {};
