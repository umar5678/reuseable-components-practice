import express from "express";
import { upload } from "../config/multer.config.js";

const router = express.Router();

import { uploadImg } from "../controllers/upload.controller.js";

router.route("/").post(upload.single("image"), uploadImg);

export default router;
