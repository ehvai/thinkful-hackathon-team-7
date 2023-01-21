/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const industry = require("../seed-data/industry-seed");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE industry RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("industry").insert(industry);
    });
};
