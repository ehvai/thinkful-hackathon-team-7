const knex = require("../db/connection");

function list() {
  return knex("industry").select("*");
}

function read(industry_id) {
  return knex("industry").select("*").where({ industry_id }).first();
}

function create(newIndustry) {
  return knex("industry")
    .insert(newIndustry, "*")
    .then((createdIndustry) => createdIndustry[0]);
}

function update(industry) {
  return knex("industry")
    .select("*")
    .where({ industry_id: industry.industry_id })
    .update(industry, "*")
    .then((updatedIndustry) => updatedIndustry[0]);
}

module.exports = {
  list,
  read,
  create,
  update,
};
