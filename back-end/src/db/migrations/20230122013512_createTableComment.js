/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("comment", (table) => {
    table.increments("comment_id").primary();
    table.text("comment_body").notNullable;
    table.integer("comment_rating");
    table.integer("search_id").unsigned().notNullable();
    table
      .foreign("search_id")
      .references("search_id")
      .inTable("search")
      .onDelete("CASCADE");
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
  return knex.schema.dropTable("comment");
};
