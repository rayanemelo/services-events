import express from "express";
import { db } from "./config/index";
import { routes } from "./routes/index";

db.on("error", async () => console.log("Connection Error"));
db.once("open", async () => {
  console.log("Database Connection: success!");
});

export const app = express();
app.use(express.json());

routes(app);
