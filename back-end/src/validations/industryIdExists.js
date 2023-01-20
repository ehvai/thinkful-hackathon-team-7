const service = require("../industry/industry.service");

async function industryIdExists(req, res, next) {
  const industry = await service.read(req.params.industry_id);

  if (industry) {
    res.locals.industry = industry;
    return next();
  }

  return next({ status: 404, message: `${req.params.industry_id} not found` });
}

module.exports = industryIdExists;
