const express = require("express");
const { router } = require("./routes/index.ts");

export const app = express();

app.use(express.json());

app.use("/", router);
