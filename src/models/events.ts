import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    info: { type: String, required: true },
    hours: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const events = mongoose.model("events", eventsSchema);

export default events;
