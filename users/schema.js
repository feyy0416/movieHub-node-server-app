import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "COMMENT_MANAGER"],
      default: "USER" },
  },
  { collection: "users" });
export default userSchema;