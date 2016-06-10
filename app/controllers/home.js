const Table = require('../../lib/table')


exports.index = async (ctx, next) =>{
  let repos = await Table.Repo.where('id', 3).fetch()
  console.log("ok")

  //ctx.body = "hello"
  return {
    menu: JSON.stringify(repos)
  }
}