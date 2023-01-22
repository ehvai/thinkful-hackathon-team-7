const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const userRouter = require("./user/user.router");
const industryRouter = require("./industry/industry.router");
const commentRouter = require("./comment/comment.router");
const searchRouter = require("./search/search.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/industry", industryRouter);
app.use("/comment", commentRouter);
app.use("/search", searchRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
