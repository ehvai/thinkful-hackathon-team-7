const router = require("express").Router();
const controller = require("./user.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:user_id")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;
