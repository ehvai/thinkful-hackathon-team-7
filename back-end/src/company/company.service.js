const knex = require("../db/connection");

function list() {
  return knex("company").select("*");
}

function read(company_id) {
  return knex("company").where({ company_id }).returning("*").first();
}

function create(newCompany) {
  return knex("company")
    .insert(newCompany, "*")
    .then((createdCompany) => createdCompany[0]);
}

function update(company) {
  return knex("company")
    .select("*")
    .where({ company_id: company.company_id })
    .update(company, "*")
    .then((updatedCompany) => updatedCompany[0]);
}

function validateCompany(company_id) {
  return knex("company").select("*").where({ company_id }).first();
}

module.exports = {
  list,
  read,
  create,
  update,
  validateCompany,
};
