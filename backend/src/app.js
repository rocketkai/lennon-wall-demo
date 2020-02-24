import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";

import postRouter from "./routes/postRouter";
import wallRouter from "./routes/wallRouter";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("Successfully hit root endpoint!"));

app.use("/posts", postRouter);
app.use("/walls", wallRouter);

module.exports = app;
