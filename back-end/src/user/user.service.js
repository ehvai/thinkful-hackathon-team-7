const knex = require("../db/connection");

function list() {
  return knex("user").select("user_email");
}

function read(user_id) {
  return knex("user").where({ user_id }).returning("*").first();
}

function create(newUser) {
  return knex("user")
    .insert(newUser, "*")
    .then((createdUser) => createdUser[0]);
}

function update(user) {
  return knex.transation(function (trx) {
    return trx("user")
      .returning("*")
      .where({ user_id: user.user_id })
      .update(user, "user_*")
      .then(() => {
        return trx("process")
          .where({ user_id: user.user_id })
          .update(user, "process_*")
          .returning("*")
          .then((updatedUser) => updatedUser[0]);
      });
  });
}

function validateEmail(user_email) {
  return knex("user").select("*").where({ user_email }).first();
}

function validateUser(user_id) {
  return knex("user").select("*").where({ user_id }).first();
}

module.exports = {
  list,
  read,
  create,
  update,
  validateEmail,
  validateUser,
};
