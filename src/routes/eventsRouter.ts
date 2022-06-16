import express from "express";
import EventsController from "../controllers/eventsController";

const router = express.Router();

router
  .get("/events", EventsController.getEvents)
  .post("/register-event", EventsController.registerEvent);

export default router;
