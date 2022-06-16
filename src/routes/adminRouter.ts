import express from "express";
import AdminController from "../controllers/adminController";

const router = express.Router();

router
  .get("/login", AdminController.getAdmin)
  .post("/register-admin", AdminController.registerAdmin);

export default router;
