import dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

const PORT = process.env.PORT || 3001;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// multer storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "_" + uniqueSuffix + ext);
//   },
// });
const storage = multer.memoryStorage();

// cloudinary config

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: storage });

// routes

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("no file uploaded");
  }

  const file = req.file;
  console.log("file:", file);
  // console.log(file.buffer); // Now file.buffer will be available

  cloudinary.uploader
    .upload_stream({ resource_type: "image" }, (error, result) => {
      if (error) {
        console.error("Cloudinary Error:", error);
        return res
          .status(500)
          .json({ message: "Error uploading to Cloudinary" });
      }
      console.log("Cloudinary Result:", result);
      res.status(200).json({
        message: "Image uploaded successfully",
        imageUrl: result.secure_url,
        publicId: result.public_id,
      });
    })
    .end(file.buffer);

  // cloudinary.uploader
  //   .upload(file, {
  //     resource_type: "image",
  //     public_id: "test-image",
  //     overwrite: true,
  //   })
  //   .then((result) => {
  //     console.log("upload result:", result);
  //   })
  //   .catch((error) => {
  //     console.error("cloudinary error:", error);
  //   });
});

// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("no file uploaded");
//   }

//   const file = req.file;
//   console.log("file", file);
//   console.log(file.buffer);

//   try {
//     cloudinary.uploader
//       .upload_stream(
//         (error, result) => {
//           // Callback function here!
//           if (error) {
//             console.error("Cloudinary Error:", error);
//             return res
//               .status(500)
//               .json({ message: "Error uploading to Cloudinary" });
//           }

//           console.log("Cloudinary Result:", result);

//           res.status(200).json({
//             message: "Image uploaded successfully",
//             imageUrl: result.secure_url,
//             publicId: result.public_id,
//           });
//         },
//         {
//           // Upload options here
//           resource_type: "image",
//           // ... other options
//         }
//       )
//       .end(file.buffer);
//   } catch (error) {
//     console.error("cloudinary error catch", error);
//   }
// });

app.get("/", (req, res) => {
  res.send("hey, Hello world");
});

app.listen(PORT, () => console.log(`Server is istening on port ${PORT}`));
