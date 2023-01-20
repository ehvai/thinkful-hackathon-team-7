const knex = require("../db/connection");

function list() {
  return knex("industry").select("*");
}

module.exports = {
  list,
};
