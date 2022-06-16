import express from "express";
import admin from "../models/admin";

class adminController {
  static getAdmin = (req: express.Request, res: express.Response) => {
    admin.find((err: Error, admin) => {
      if (!err) {
        res.status(200).json(admin);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Usuário não encontrado` });
      }
    });
  };

  static registerAdmin = async (
    req: express.Request,
    res: express.Response
  ) => {
    let user = new admin(req.body);

    await user.save((err: Error) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - Erro ao cadastrar usuário administrativo.`,
        });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };
}

export default adminController;
