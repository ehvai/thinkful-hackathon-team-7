const router = require("express").Router();
const controller = require("./user.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/completeList").get(controller.list).all(methodNotAllowed);

router.route("/login").post(controller.verifyLogin).all(methodNotAllowed);

router
  .route("/")
  .get(controller.read)
  .put(controller.update)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
