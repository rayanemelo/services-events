import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const events = mongoose.model("events", eventsSchema);

export default events;
