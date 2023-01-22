const knex = require("../db/connection");

function create(comment) {
  return knex("comment")
    .insert(comment, "*")
    .then((createdComment) => createdComment[0]);
}

function userRead(user_id) {
  return knex("comment").select("*").where({ user_id });
}

function companyRead(company_id) {
  return knex("comment").select("*").where({ company_id });
}

module.exports = { create, userRead, companyRead };
