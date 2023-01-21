const knex = require("../db/connection");

function create(comment) {
  return knex("comment")
    .insert(comment, "*")
    .then((createdComment) => createdComment[0]);
}
module.exports = { create };
