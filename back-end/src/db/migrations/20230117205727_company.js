/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("company", (table) => {
    table.increments("company_id").primary();
    table.string("company_name");
    table.string("company_culture");
    table.integer("company_employees");
    table.string("company_city");
    table.string("company_state");
    table.string("company_zip");
    table.text("company_comments");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema(dropTable("company"));
};
