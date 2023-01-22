const service = require("./industry.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Returns the full list of industries
async function list(req, res) {
  const industry = await service.list();
  res.json({ data: industry });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
