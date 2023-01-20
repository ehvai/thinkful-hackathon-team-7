const knex = require("../db/connection");

function list() {
  return knex("company").select("*");
}

function read(company_id) {
  return knex("company").select("*").where({ company_id }).first();
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

module.exports = {
  list,
  read,
  create,
  update,
};
