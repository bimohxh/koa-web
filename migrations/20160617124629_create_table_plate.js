const knex = require('knex')


exports.up = function(knex, Promise) {
  return knex.schema.createTable('plate', function(table) {
    table.increments('id').primary();
    table.string('key');
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  
};
