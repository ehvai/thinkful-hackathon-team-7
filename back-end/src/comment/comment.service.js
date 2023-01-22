const knex = require("../db/connection");

function create(comment) {
  return knex("comment")
    .insert(comment, "*")
    .then((createdComment) => createdComment[0]);
}

function read(user_id) {
  return knex("comment").select("*").where({ user_id });
}

module.exports = { create, read };
