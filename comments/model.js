import mongoose from "mongoose";
import commentSchema from "./schema.js";
const model = mongoose.model("comments", commentSchema);
export default model;