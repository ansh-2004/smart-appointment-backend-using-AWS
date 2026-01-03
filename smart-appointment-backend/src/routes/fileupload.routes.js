import express from "express";
import {
 uploadReport
} from "../controllers/fileupload.controller.js";
import {upload} from "../middleware/upload.middleware.js"
const router = express.Router();

router.post(
  "/appointments/:id/upload",
  upload.single("file"),
  uploadReport
);
export default router;
