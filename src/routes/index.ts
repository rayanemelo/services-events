import express from "express";
import events from "./eventsRouter";

const routes = (app: express.Application) => {
  app.route("/").get((req, res) => res.status(200).send({ titulo: "Alô alô" }));

  app.use(express.json(), events);
};

export default routes;
