import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    id: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const admin = mongoose.model("admin", adminSchema);

export default admin;
