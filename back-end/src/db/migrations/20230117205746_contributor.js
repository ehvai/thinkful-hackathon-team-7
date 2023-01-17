/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contributor", (table) => {
    table.increments("contributor_id").primary();
    table.string("contributor_name");
    table.string("contributor_linkedin");
    table.string("contributor_email");
    table.text("contributor_about");
    table.string("contributor_login");
    table.string("contributor_password");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contributor");
};
