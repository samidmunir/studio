import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const ADMIN_CODE = process.env.ADMIN_CODE;

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, adminCode } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Registration failed.",
        error: "Email already in use.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = adminCode === ADMIN_CODE ? "admin" : "user";

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    console.log("\nRegistration successful!" + newUser);

    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.log("REGISTRATION FAILED!");
    return res
      .status(500)
      .json({ message: "Registration failed.", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials.", error: "User not found." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials.", error: "User not found." });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log("LOGIN FAILED!");
    return res
      .status(500)
      .json({ message: "Login failed.", error: err.message });
  }
};
