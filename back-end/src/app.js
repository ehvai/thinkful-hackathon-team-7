const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const companyRouter = require("./company/company.router.js");
const contributorRouter = require("./contributor/contributor.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/company", companyRouter);
app.use("/contributor", contributorRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
