const knexfile = require('../knexfile.js'),
      localEnv = require('../config/local_env')

var knex = require('knex')(knexfile[localEnv.environment]);

var bookshelf = require('bookshelf')(knex);


module.exports = {
  bookshelf: bookshelf
}
