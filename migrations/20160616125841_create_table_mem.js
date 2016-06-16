const knex = require('knex')


exports.up = function(knex, Promise) {
  return knex.schema.createTable('mem', function(table) {
    table.increments('id').primary();
    table.string('email');
    table.string('pwd');
    table.string('nc', 100);
  })
};

exports.down = function(knex, Promise) {
  
};
