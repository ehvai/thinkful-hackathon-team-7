const router = require("express").Router();
const controller = require("./user.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/completeList").get(controller.list).all(methodNotAllowed);

router.route("/login").get(controller.verifyLogin).all(methodNotAllowed);

router.route("/comment").post(controller.commentCreate).all(methodNotAllowed);

router
  .route("/")
  .get(controller.read)
  .put(controller.update)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
