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
var Repo = bookshelf.Model.extend({
  tableName: 'repos'
})



exports.index = async (ctx, next) =>{
  let repos = await Repo.where('id', 3).fetch()
  console.log("ok")

  //ctx.body = "hello"
  return {
    menu: JSON.stringify(repos)
  }
}