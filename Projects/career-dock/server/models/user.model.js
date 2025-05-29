import mongoose from "mongoose";

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
      minlength: 6,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
    },
    bio: {
      type: String,
    },
    degree: {
      type: String,
    },
    major: {
      type: String,
    },
    minor: {
      type: String,
    },
    grad_year: {
      type: Number,
    },
    university: {
      type: String,
    },
    courses: [String],
    projects: [String],
    skills: [String],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
