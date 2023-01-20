/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("user_id").primary();
    table.string("user_login").notNullable;
    table.string("user_password").notNullable;
    table.string("user_email").notNullable;
    table.string("user_social");
    table.string("user_");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
