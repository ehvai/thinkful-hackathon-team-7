/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("company", (table) => {
    table.increments("company_id").primary();
    table.string("company_name").notNullable;
    table.string("company_city");
    table.string("company_state");
    table.string("company_size");
    table.string("company_salary");
    table.boolean("company_growth").defaultTo(false);
    table.boolean("company_diversity").defaultTo(false);
    table.boolean("company_on_site").defaultTo(false);
    table.boolean("company_hybrid").defaultTo(false);
    table.boolean("company_remote").defaultTo(false);
    table.boolean("company_culture").defaultTo(false);
    table.boolean("company_UI_UX").defaultTo(false);
    table.boolean("company_UI").defaultTo(false);
    table.boolean("company_UX").defaultTo(false);
    table.boolean("company_full_stack").defaultTo(false);
    table.boolean("company_front_end").defaultTo(false);
    table.boolean("company_back_end").defaultTo(false);
    table.boolean("company_data_analysis").defaultTo(false);
    table.integer("industry_id").unsigned().notNullable();
    table
      .foreign("industry_id")
      .references("industry_id")
      .inTable("industry")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("company");
};
