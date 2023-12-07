import express from 'express';
import cors from "cors";
import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import CommentRoutes from './comments/routes.js';
import LikeRoutes from './likes/routes.js';
import FollowRoutes from './follows/routes.js';
import "dotenv/config";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/moviehub';
// mongoose.connect('mongodb://127.0.0.1:27017/moviehub');
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

app.use(express.json());
const port = process.env.PORT || 4000;
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

CommentRoutes(app);
UserRoutes(app);
LikeRoutes(app);
FollowRoutes(app);
app.listen(4000);