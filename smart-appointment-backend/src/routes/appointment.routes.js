import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  bookAppointment,
  getMyAppointments
} from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/book", authenticate, bookAppointment);
router.get("/", authenticate, getMyAppointments);

export default router;
