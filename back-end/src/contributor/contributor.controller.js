const service = require("./contributor.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const company = await service.list();
  res.json({ data: company });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
