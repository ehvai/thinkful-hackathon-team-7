const service = require("../company/company.service");

async function companyExists(req, res, next) {
  const company = await service.list();

  if (company.company_name) {
    return next({ status: 404, message: `${company} exists` });
  }

  return next();
}

module.exports = companyExists;
