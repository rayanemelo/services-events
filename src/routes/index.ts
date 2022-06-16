import express from "express";
import events from "./eventsRouter";
import admin from "./adminRouter";

const routes = (app: express.Application) => {
  app.route("/").get((req, res) => res.status(200).send({ titulo: "Alô alô" }));

  app.use(express.json(), events, admin);
};

export default routes;
