import express from "express";

export const routes = (app: express.Application) => {
  app.route("/").get((req: express.Request, res: express.Response) => {
    res.status(200).send({ message: "Alô alô" });
  });

  app.use(express.json());
};
