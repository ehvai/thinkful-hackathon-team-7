/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("search", (table) => {
    table.increments("search_id").primary();
    table.string("search_name").notNullable;
    table.string("search_industry_name");
    table.string("search_company_name");
    table.string("search_city");
    table.string("search_state");
    table.string("search_size");
    table.string("search_salary");
    table.boolean("search_growth").defaultTo(false);
    table.boolean("search_diversity").defaultTo(false);
    table.boolean("search_on_site").defaultTo(false);
    table.boolean("search_hybrid").defaultTo(false);
    table.boolean("search_remote").defaultTo(false);
    table.boolean("search_culture").defaultTo(false);
    table.boolean("search_UI_UX").defaultTo(false);
    table.boolean("search_UI").defaultTo(false);
    table.boolean("search_UX").defaultTo(false);
    table.boolean("search_full_stack").defaultTo(false);
    table.boolean("search_front_end").defaultTo(false);
    table.boolean("search_back_end").defaultTo(false);
    table.boolean("search_data_analysis").defaultTo(false);
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("user_id").inTable("user");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("search");
};
