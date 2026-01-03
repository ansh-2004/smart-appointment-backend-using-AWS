import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "../config/s3.js";

export const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    key: (req, file, cb) => {
      const fileName = `appointments/${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
});
