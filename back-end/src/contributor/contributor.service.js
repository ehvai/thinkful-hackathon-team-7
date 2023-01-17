const knex = require("../db/connection");

function list() {
  return knex("contributor").select("*");
}

module.exports = {
  list,
};
