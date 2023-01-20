const service = require("../company/company.service");

async function companyIdExists(req, res, next) {
  const company = await service.read(req.params.company_id);

  if (company) {
    res.locals.company = company;
    return next();
  }

  return next({ status: 404, message: `${req.params.company_id} not found` });
}

module.exports = companyIdExists;
