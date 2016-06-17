const knex = require('knex')


exports.up = function(knex, Promise) {
  return knex.schema.createTable('resume_plate_field', function(table) {
    table.increments('id').primary()
    table.integer('resume_plate_id')
    table.string('key')

    table.string('con')
    table.text('context')
  })
};

exports.down = function(knex, Promise) {
  
};
