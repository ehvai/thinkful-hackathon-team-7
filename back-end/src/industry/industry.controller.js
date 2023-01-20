const service = require("./industry.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");
const industryExists = require("../validations/industryExists");
const industryIdExists = require("../validations/industryIdExists");

const REQUIRED_PROPERTIES = ["industry_name"];
const hasRequiredProperties = hasProperties(REQUIRED_PROPERTIES);

// Returns the full list of industries
async function list(req, res) {
  const industry = await service.list();
  res.json({ data: industry });
}

// Returns a single industry.  industry_id is required
async function read(req, res) {
  res.json({ data: res.locals.industry });
}

// Creates a single industry
async function create(req, res) {
  const industry = await service.create(req.body.data);
  res.status(201).json({ data: industry });
}

// Updates a single industry.  industry_id is required.
async function update(req, res) {
  const industry = await service.update(req.body.data);
  res.json({ data: industry });
}

module.exports = {
  read: [asyncErrorBoundary(industryIdExists), read],
  create: [
    hasRequiredProperties,
    asyncErrorBoundary(industryExists),
    asyncErrorBoundary(create),
  ],
  update: [
    hasRequiredProperties,
    asyncErrorBoundary(industryIdExists),
    asyncErrorBoundary(update),
  ],
  list: [asyncErrorBoundary(list)],
};
