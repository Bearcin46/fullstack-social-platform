import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserDetails } from "./models/usermodel";
dotenv.config();

const server = express();
const SERVER_PORT = 3000;
server.use(cors());
server.use(express.json());

const db_connection = process.env.MONGODB_URL;

mongoose
  .connect(db_connection)
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("error on db", err);
  });

server.get("/", async (req, res) => {
  const { fullName, email, profileUrl, password } = req.body;
  if (!(fullName && email && profileUrl && password)) {
    res.status(400).json({ message: "Please enter valid credentials" });
  }
});

server.listen(SERVER_PORT, () => {
  console.log(`server is running in http://localhost:${SERVER_PORT}`);
});
