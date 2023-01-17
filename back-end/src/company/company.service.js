const knex = require("../db/connection");

function list() {
  return knex("company").select("*");
}

module.exports = {
  list,
};
