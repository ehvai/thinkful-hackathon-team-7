const service = require("./comment.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../validations/hasProperties");

const REQUIRED_PROPERTIES = ["comment_body", "user_id", "search_id"];
const hasRequiredProperties = hasProperties(REQUIRED_PROPERTIES);

// Creates a single comment
async function create(req, res) {
  const comment = await service.create(req.body.data);
  res.status(201).json({ data: comment });
}

module.exports = {
  create: [hasRequiredProperties, asyncErrorBoundary(create)],
};
