/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("process", (table) => {
    table.increments("process_id").primary();
    table.boolean("process_applied").defaultTo(false);
    table.boolean("process_heard_back").defaultTo(false);
    table.boolean("process_interview").defaultTo(false);
    table.boolean("process_multi_interview").defaultTo(false);
    table.boolean("process_offer").defaultTo(false);
    table.boolean("process_hired").defaultTo(false);
    table.integer("company_id").unsigned().notNullable();
    table
      .foreign("company_id")
      .references("company_id")
      .inTable("company")
      .onDelete("CASCADE");
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("user")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("process");
};
