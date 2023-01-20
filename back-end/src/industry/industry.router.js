const router = require("express").Router();
const industryController = require("./industry.controller");
const companyController = require("../company/company.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const industryIdExists = require("../validations/industryIdExists");

router
  .route("/:industry_id/company")
  .post(industryIdExists, companyController.create)
  .put(industryIdExists, companyController.update)
  .all(methodNotAllowed);

router
  .route("/")
  .get(industryController.list)
  .post(industryController.create)
  .all(methodNotAllowed);

module.exports = router;
