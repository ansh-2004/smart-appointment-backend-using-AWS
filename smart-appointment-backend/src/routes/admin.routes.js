import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";
import { getAllAppointments } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/appointments", authenticate, adminOnly, getAllAppointments);

export default router;
