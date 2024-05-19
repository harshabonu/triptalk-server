import express from "express";
import {
    newPost,showPost
} from "../controllers/post.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.post("/new",  newPost);
app.get("/showposts",  showPost);



export default app;
