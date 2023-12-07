import mongoose from "mongoose";

const LikeSchema =new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        movieId: String,
        movieName: String,
    },
    { collection: "likes" }
)
export default LikeSchema;