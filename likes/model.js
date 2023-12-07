import mongoose from "mongoose";
import LikeSchema from "./schema.js";
const model = mongoose.model("likes", LikeSchema);
export default model;