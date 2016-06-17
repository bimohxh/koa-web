const knex = require('knex')


exports.up = function(knex, Promise) {
  return knex.schema.createTable('resume_plate', function(table) {
    table.increments('id').primary()
    table.integer('resume_id')
    table.integer('plate_id')

    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  
};
