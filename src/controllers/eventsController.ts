import express from "express";
import events from "../models/events";

class EventsController {
  static getEvents = (req: express.Request, res: express.Response) => {
    events.find((err: Error, events) => {
      if (!err) {
        res.status(200).json(events);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Nenhum evento encontrado` });
      }
    });
  };

  static getEvent = (req: express.Request, res: express.Response) => {
    const id = req.params.id;

    events.findById(id, (err: Error, events: any) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - ID do evento não localizado.` });
      } else {
        res.status(200).send(events);
      }
    });
  };

  static registerEvent = async (
    req: express.Request,
    res: express.Response
  ) => {
    let event = new events(req.body);

    await event.save((err: Error) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - Erro ao cadastrar evento.`,
        });
      } else {
        res.status(201).send(event.toJSON());
      }
    });
  };

  static updateEvent = (req: express.Request, res: express.Response) => {
    const id = req.params.id;

    events.findByIdAndUpdate(id, { $set: req.body }, (err: Error) => {
      if (!err) {
        res.status(200).send({ message: `Evento atualizado com sucesso.` });
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Erro ao atualizar evento.` });
      }
    });
  };

  static deleteEvent = (req: express.Request, res: express.Response) => {
    const id = req.params.id;

    events.findByIdAndDelete(id, (err: Error) => {
      if (!err) {
        res.status(200).send({ message: "Evento removido com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao deletar evento.` });
      }
    });
  };
}

export default EventsController;
