const knex = require('knex')


exports.up = function(knex, Promise) {
  return knex.schema.createTable('plate_field', function(table) {
    table.increments('id').primary()
    table.string('key')
    table.string('name')
    table.integer('plate_id')
  })
};

exports.down = function(knex, Promise) {
  
};
