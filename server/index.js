import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserDetails } from "./models/usermodel.js";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
dotenv.config();

const server = express();
const SERVER_PORT = 3000;
server.use(cors());
server.use(express.json());
server.use(cookieParser());

const db_connection = process.env.MONGODB_URL;

mongoose
  .connect(db_connection)
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("error on db", err);
  });

server.get("/", (req, res) => {
  res.status(200).send("hello from express");
});

//register

server.post("/signup", async (req, res) => {
  //get the details
  const { fullName, email, profileUrl, password } = req.body;
  //confirms whether it is present
  if (!(fullName && email && profileUrl && password)) {
    return res.status(400).json({ message: "Please enter valid credentials" });
  }
  //check whether it is already in database
  const existingUser = await UserDetails.findOne({ email });
  if (existingUser) {
    return res.status(401).json({ message: "You have registered already" });
  }
  //encrypt the password
  const encryptedPassword = await bcrypt.hash(password, 10);
  //create new user account
  const user = await UserDetails.create({
    fullName,
    email,
    profileUrl,
    password: encryptedPassword,
  });
  //generate jwt token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1hr",
    }
  );

  //add web token to user
  user.token = token;
  //i dont want to send password to frontend
  user.password = undefined;

  //now send this to frontend in json format
  res.status(201).json(user);
});

//login
server.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res
        .status(400)
        .json({ message: "Please enter valid credentials" });
    }
    const existingUser = await UserDetails.findOne({ email });

    //check whether user is found  password is correct

    // if (!existingUser) {
    //   res.status(400).json({ message: "No user found, please signup" });
    // }

    //check whether  password is correct

    const comparePassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    // if(!comparePassword){
    //   res.status(400).json({message:"Incorrect password"})
    // }

    //shorthand method for above
    if (existingUser && comparePassword) {
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1hr",
      });
      existingUser.token = token;
      existingUser.password = undefined;
      //we need to send this to cookie
      //cookie section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        existingUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Please enter valid credentials" });
  }
});

server.listen(SERVER_PORT, () => {
  console.log(`server is running in http://localhost:${SERVER_PORT}`);
});
