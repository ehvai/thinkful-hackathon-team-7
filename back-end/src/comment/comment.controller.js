const service = require("./comment.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const commentIdExists = require("../validations/commentIdExists");
const hasProperties = require("../validations/hasProperties");
const commentExists = require("../validations/commentExists");

const REQUIRED_PROPERTIES = ["comment_name"];
const hasRequiredProperties = hasProperties(REQUIRED_PROPERTIES);

// Returns the full list of companies
async function list(req, res) {
  const comment = await service.list();
  res.json({ data: comment });
}

// Returns a single comment.  comment_id is required
async function read(req, res) {
  res.json({ data: res.locals.comment });
}

// Creates a single comment
async function create(req, res) {
  const comment = await service.create(req.body.data);
  res.status(201).json({ data: comment });
}

// Updates a single comment.  comment_id is required.
async function update(req, res) {
  const comment = await service.update(req.body.data);
  res.json({ data: comment });
}

module.exports = {
  read: [asyncErrorBoundary(commentIdExists), read],
  create: [
    hasRequiredProperties,
    asyncErrorBoundary(commentExists),
    asyncErrorBoundary(create),
  ],
  update: [
    hasRequiredProperties,
    asyncErrorBoundary(commentIdExists),
    asyncErrorBoundary(update),
  ],
  list: [asyncErrorBoundary(list)],
};
