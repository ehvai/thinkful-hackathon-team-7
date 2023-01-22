const knex = require("../db/connection");

function create(search) {
  return knex("search")
    .insert(search, "*")
    .then((createdSearch) => createdSearch[0]);
}

function read(user_id) {
  return knex("search").select("*").where({ user_id });
}

module.exports = { create, read };
