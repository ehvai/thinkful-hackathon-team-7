const knex = require("../db/connection");

function list() {
  return knex("user").select("*");
}

function read(user_id) {
  return knex("user").select("*").where({ user_id }).first();
}

function create(newUser) {
  return knex("user")
    .insert(newUser, "*")
    .then((createdUser) => createdUser[0]);
}

function update(user) {
  return knex("user")
    .select("*")
    .where({ user_id: user.user_id })
    .update(user, "*")
    .then((updatedUser) => updatedUser[0]);
}

function validate(user_email) {
  return knex("user").select("*").where({ user_email }).first();
}

module.exports = {
  list,
  read,
  create,
  update,
  validate,
};
