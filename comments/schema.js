import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    movieId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: "comments" });
export default commentSchema;