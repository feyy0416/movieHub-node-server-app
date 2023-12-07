import mongoose from "mongoose";

const FollowSchema =new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        username: String,
        followedUser: String,
    },
    { collection: "follows" }
)
export default FollowSchema;