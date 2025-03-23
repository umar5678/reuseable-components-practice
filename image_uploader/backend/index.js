import dotenv from "dotenv";
dotenv.config();
import express from "express";
// import multer from "multer";
import cors from "cors";
import path from "path";
// import { v2 as cloudinary } from "cloudinary";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js";

const PORT = process.env.PORT || 3001;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import uploadRouter from "./routes/upload.route.js";
app.use("/upload", uploadRouter);

app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send("hey, Hello world");
});

app.listen(PORT, () => console.log(`Server is istening on port ${PORT}`));
