import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

// routes

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("no file uploaded");
  }
  console.log("uploaded file", req.file);
  res.json({
    message: "image uploaded successfully",
    filename: req.file.filename,
  });
});

app.get("/", (req, res) => {
  res.send("hey, Hello world");
});

app.listen(PORT, () => console.log(`Server is istening on port ${PORT}`));
