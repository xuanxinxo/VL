import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Vieclab running 🚀");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/vieclab";

mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected ✅");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error("DB connection error:", err));
