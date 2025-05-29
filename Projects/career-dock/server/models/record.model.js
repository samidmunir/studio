import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
    },
    type: {
      type: String,
      enum: ["on-site", "hybrid", "remote"],
      required: true,
    },
    salary: {
      type: Number,
    },
    hourly: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "closed"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordSchema);
