const service = require("../../industry/industry.service");

async function industryExists(req, res, next) {
  const industry = await service.list();

  if (industry.industry_name) {
    return next({ status: 404, message: `${industry} exists` });
  }

  return next();
}

module.exports = industryExists;
