import Record from "../models/record.model.js";
import User from "../models/user.model.js";

export const create = async (req, res) => {
  const {
    userId,
    title,
    category,
    company,
    url,
    description,
    type,
    status,
    city,
    state,
    country,
    skills,
    salary,
    hourly,
  } = req.body;

  try {
    const user = User.findById({ userId });
    if (!user) {
      console.log("Cannot create new record without valid user.");
      return res.status(500).json({
        message: "Cannot create new record without valid user.",
        error: "User not found.",
      });
    }
    const record = await Record.create(req.body);
    console.log("Record created successfully.");
    return res.status(201).json(record);
  } catch (err) {
    console.log("Error creating record.");
    return res
      .status(400)
      .json({ message: "Error creating record.", error: err.message });
  }
};

export const getAllRecordsByUserId = async (req, res) => {
  const { userId } = req.body;
  try {
    const records = await Record.find({ userId: userId });
    return res.status(200).json(records);
  } catch (err) {
    console.log("Error getting records for user.");
    return res
      .status(400)
      .json({ message: "Error getting records for user.", error: err.message });
  }
};

export const getRecordById = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) {
      console.log("Failed to find record.");
      return res.status(400).json({
        message: "Failed to find record.",
        error: "Invalid/unknown record ID.",
      });
    }
    return res.status(200).json({ message: "Record found.", record: record });
  } catch (err) {
    console.log("Failed to find record.");
    return res.status(500).json({
      message: "Failed to find record.",
      error: "Invalid/unknown record ID.",
    });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const updated = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updated);
  } catch (err) {
    console.log("Failed to update record.");
    return res
      .status(500)
      .json({ message: "Failed to update record.", error: err.message });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Record deleted successfully." });
  } catch (err) {
    console.log("Failed to delete record.");
    return res
      .status(500)
      .json({ message: "Failed to delete record.", error: err.message });
  }
};
