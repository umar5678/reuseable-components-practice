import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uplaodProfileImg } from "../helpers/uploadProfileImg.js";

const uploadImg = AsyncHandler(async (req, res) => {
  if (req.file) {
    const file = req.file;
    console.log("getting fie: ", file);
    //   const uploadResult = await uplaodProfileImg(file);

    //   if (uploadResult.success) {
    //     console.log("upload results", uploadResult.result);
    //   } else {
    //     console.log(uploadResult.message);
    //   }
    // }
  }
  console.log("upload run");
  console.log(req.body);
});

export { uploadImg };
