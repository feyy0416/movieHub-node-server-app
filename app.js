import express from 'express';
import cors from "cors";
import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import CommentRoutes from './comments/routes.js';
import LikeRoutes from './likes/routes.js';
import FollowRoutes from './follows/routes.js';
mongoose.connect("mongodb://127.0.0.1:27017/moviehub");
const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
const port = process.env.PORT || 4000;

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(
    session(sessionOptions)
);
CommentRoutes(app);
UserRoutes(app);
LikeRoutes(app);
FollowRoutes(app);
app.listen(4000);