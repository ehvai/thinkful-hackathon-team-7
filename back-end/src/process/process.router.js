const router = require("express").Router();
const controller = require("./process.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.read)
  .put(controller.update)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
