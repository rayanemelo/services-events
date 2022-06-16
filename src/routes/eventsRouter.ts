import express from "express";
import EventsController from "../controllers/eventsController";

const router = express.Router();

router
  .get("/events", EventsController.getEvents)
  .get("/event/:id", EventsController.getEvent)
  .post("/register-event", EventsController.registerEvent)
  .put("/update-event/:id", EventsController.updateEvent);
export default router;
