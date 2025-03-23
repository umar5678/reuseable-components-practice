import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyToken = AsyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    console.log("verify token called");

    if (!token) throw new ApiError(403, "Unauthorized Request");

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id).select("-password");

    if (!user) throw new ApiError(403, "Unauthorized request from user");

    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(403, error?.message || "Unauthorized");
  }
});
