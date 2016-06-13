const Table = require('../../lib/table')


exports.get_index = async (ctx, next) =>{
  let repos = await Table.Repo.where('id', 3).fetch()
  console.log("ok")
  ctx.session.user = ctx.session.user || 0
  ctx.session.user += 1
  return {
    menu: JSON.stringify(repos),
    sion: ctx.session.user
  }
}



exports.post_login = async (ctx, next) =>{
}
