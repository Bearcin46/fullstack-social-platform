import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const UserDetails = mongoose.model("User", UserModel);
