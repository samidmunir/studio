import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import recordRouter from "./routes/record.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/record", recordRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}...`);
  console.log(`JWT_SECRET: ${process.env.JWT_SECRET}`);
  connectDB();
});
