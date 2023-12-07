import mongoose from "mongoose";
import FollowSchema from "./schema.js";
const model = mongoose.model("follows", FollowSchema);
export default model;