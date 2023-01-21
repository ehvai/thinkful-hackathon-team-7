const service = require("../../industry/industry.service");

async function industryIdExists(req, res, next) {
  const { industry_id } = req.body.data;
  const industry = await service.read(industry_id);

  if (industry) {
    res.locals.industry = industry;
    return next();
  }

  return next({ status: 404, message: `${industry_id} not found` });
}

module.exports = industryIdExists;
