const router = require("express").Router();
const industryController = require("./industry.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(industryController.list)
  .post(industryController.create)
  .all(methodNotAllowed);

module.exports = router;
