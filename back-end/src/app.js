const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const companyRouter = require("./company/company.router");
const userRouter = require("./user/user.router");
const industryRouter = require("./industry/industry.router");
const commentRouter = require("./comment/comment.router");
const processRouter = require("./process/process.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/company", companyRouter);
app.use("/user", userRouter);
app.use("/industry", industryRouter);
app.use("/comment", commentRouter);
app.use("/process", processRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
