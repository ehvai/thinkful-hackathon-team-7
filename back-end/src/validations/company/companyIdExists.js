const service = require("../../company/company.service");

async function companyIdExists(req, res, next) {
  const { company_id } = req.params;
  const company = await service.validateCompany(company_id);

  if (company) {
    res.locals.company = company;
    return next();
  }

  return next({ status: 404, message: `${company_id} not found` });
}

module.exports = companyIdExists;
