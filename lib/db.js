var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '1234',
    database : 'webs',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);




module.exports = {
  bookshelf: bookshelf
}