import express from "express";
import {
  create,
  getAllRecordsByUserId,
  getRecordById,
  updateRecord,
  deleteRecord,
} from "../controllers/record.controller.js";

const recordRouter = express.Router();

recordRouter.post("/create", create);
recordRouter.post("/get-user-records", getAllRecordsByUserId);
recordRouter.get("/:id", getRecordById);
recordRouter.put("/:id", updateRecord);
recordRouter.delete("/:id", deleteRecord);

export default recordRouter;
