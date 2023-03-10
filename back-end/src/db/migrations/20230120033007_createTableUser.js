/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("user_id").primary();
    table.string("user_name").notNullable;
    table.string("user_password").notNullable;
    table.string("user_email").notNullable;
    table.string("user_social");
    table.boolean("user_applied").defaultTo(false);
    table.boolean("user_heard_back").defaultTo(false);
    table.boolean("user_interview").defaultTo(false);
    table.boolean("user_multi_interview").defaultTo(false);
    table.boolean("user_offer").defaultTo(false);
    table.boolean("user_hired").defaultTo(false);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
