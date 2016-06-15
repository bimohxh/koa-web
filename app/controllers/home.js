const Table = require('../../lib/table'),
      jwt = require('koa-jwt'),
      localEnv = require('../../config/local_env')


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

exports.post_signin = async (ctx, next) =>{
  let body = ctx.request.body

  let crypto = require('crypto');
  let pwd = crypto.createHash('md5').update(body.pwd).digest('hex');

  let mem = await Table.Mem.where({email: body.email, pwd: pwd}).fetch()
  if (mem) {
    ctx.cookies.set('mem', jwt.sign({uid: mem.id}, localEnv.jwtkey))
    ctx.body = true
  }else{
    ctx.body = false
  }

}

exports.get_signup = async (ctx, next) =>{

}




exports.post_signup = async (ctx, next) =>{
  let body = ctx.request.body

  let crypto = require('crypto');
  let pwd = crypto.createHash('md5').update(body.pwd).digest('hex');

  
  let param = {
    nc: body.nc,
    pwd: pwd,
    email: body.email
  }

  await new Table.Mem(param).save()
  ctx.body = {status: true}

}


exports.post_ckemail = async (ctx, next) =>{
  let count = await Table.Mem.where('email', ctx.request.body.email).count()
  ctx.body = (count < 1)
}

exports.post_cknc = async (ctx, next) =>{
  let count = await Table.Mem.where('nc', ctx.request.body.nc).count()
  ctx.body = (count < 1)
}