const knex = require('knex')


exports.up = function(knex, Promise) {
  return knex.schema.createTable('resume', function(table) {
    table.increments('id').primary();
    table.integer('mem_id');
    table.string('name');
    table.string('theme');
  })
};

exports.down = function(knex, Promise) {
  
};
