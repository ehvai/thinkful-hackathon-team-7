const service = require("./company.service");
const commentService = require("../comment/comment.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const companyIdExists = require("../validations/company/companyIdExists");
const hasProperties = require("../validations/hasProperties");
const companyExists = require("../validations/company/companyExists");
const industryIdExists = require("../validations/industry/industryIdExists");

const REQUIRED_PROPERTIES = ["company_name", "industry_id"];
const hasRequiredProperties = hasProperties(REQUIRED_PROPERTIES);

// Returns the full list of companies
async function list(req, res) {
  const company = await service.list();
  res.json({ data: company });
}

// Returns a single company.  company_id is required
async function read(req, res) {
  const { company_id } = res.locals.company;
  const company = await service.read(company_id);
  const comment = await commentService.companyRead(company_id);
  const company_comment = [{ company }, { comment }];
  res.json({ data: company_comment });
}

// Creates a single company
async function create(req, res) {
  const company = await service.create(req.body.data);
  res.status(201).json({ data: company });
}

// Updates a single company.  company_id is required.
async function update(req, res) {
  const company = await service.update(req.body.data);
  res.json({ data: company });
}

module.exports = {
  read: [asyncErrorBoundary(companyIdExists), read],
  create: [
    hasRequiredProperties,
    asyncErrorBoundary(industryIdExists),
    asyncErrorBoundary(companyExists),
    asyncErrorBoundary(create),
  ],
  update: [
    hasRequiredProperties,
    asyncErrorBoundary(companyIdExists),
    asyncErrorBoundary(update),
  ],
  list: [asyncErrorBoundary(list)],
};
