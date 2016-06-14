const Table = require('../../lib/table'),
      jwt = require('koa-jwt')


exports.get_index = async (ctx, next) =>{
  /*let repos = await Table.Repo.where('id', 3).fetch()
  console.log("ok")
  ctx.session.user = ctx.session.user || 0
  ctx.session.user += 1*/
  /*return {
    //menu: JSON.stringify(repos),
    //sion: ctx.i18n.__('hello')
    //sion: jwt.verify(ctx.cookies.get('uid'), 'hxh')
  }*/
}



exports.get_signin = async (ctx, next) =>{
}

exports.get_signup = async (ctx, next) =>{
}
