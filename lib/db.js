const knexfile = require('../knexfile.js'),
      localEnv = require('./local_config.js')

var knex = require('knex')(knexfile[localEnv.environment]);

var bookshelf = require('bookshelf')(knex);


module.exports = {
  bookshelf: bookshelf
}
