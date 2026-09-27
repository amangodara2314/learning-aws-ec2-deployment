import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import rateLimiter from "./middlewares/rateLimiter.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
