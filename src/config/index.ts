import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@events.2vybwu8.mongodb.net/events");

export const db = mongoose.connection;
