'use strict';
require("babel-polyfill");

const Koa = require('koa'),
      views = require('koa-views'),
      router = require('koa-router')(),
      serve = require('koa-static'),
      mount = require('koa-mount'),
      session = require('koa-session'),
      convert = require('koa-convert'),
      locale = require('koa-locale'),
      bodyParser = require('koa-bodyparser'),
      jwt = require('koa-jwt'),
      i18n = require('koa-i18n'),
      _ = require('underscore'),
      development = require('./lib/development'),
      localEnv = require('./config/local_env')

const app = new Koa()

app.use(bodyParser())

// 本地化
locale(app) 
app.use(i18n(app, {
  directory: './config/locales',
  locales: ['zh-CN', 'en'], //  `zh-CN` defualtLocale, must match the locales to the filenames
  modes: [
    'query',                //  optional detect querystring - `/?locale=en-US`
    'subdomain',            //  optional detect subdomain   - `zh-CN.koajs.com`
    'cookie',               //  optional detect cookie      - `Cookie: locale=zh-TW`
    'header',               //  optional detect header      - `Accept-Language: zh-CN,zh;q=0.5`
    'url',                  //  optional detect url         - `/en`
    'tld',                  //  optional detect tld(the last domain) - `koajs.cn`
    function() {}           //  optional custom function (will be bound to the koa context)
  ]
}))

// 静态文件服务
app.use(mount('/assets', serve(__dirname + '/app/assets')));
app.use(mount('/assets', serve(__dirname + '/vendor')));
app.use(mount('/tmp', serve(__dirname + '/tmp')));
app.use(mount('/', serve(__dirname + '/public')));



//视图处理
app.use(views(__dirname + '/app/views', {
  map: {
    jade: 'jade'
  }
}));


// 路由
let render = async (ctx, controller, action)=> {
  let contr = require('./app/controllers/' + controller)
  let para = await contr['get_' + action](ctx)

  let vi = controller + '/' + action + '.jade'

  let mem = ctx.cookies.get('mem') ? jwt.verify(ctx.cookies.get('mem'), localEnv.jwtkey) : null

  console.log('mem', mem)
  await ctx.render(vi,
    _.extend({
      params: ctx.params,
      route: {
        controller: controller,
        action: action
      },
      development: development,
      localEnv: localEnv,
      mem: mem

      //query: qs.parse(url.parse(ctx.request.url).query)
    }, para || {})
  )
}
 

//app.use(jwt({ secret: 'hxh', cookie: 'mem'}))

router.get('/',  async (ctx, next) =>{
  await render(ctx, 'home', 'index')
});

router.get('/:action',  async (ctx, next) =>{
  let normals = ['signin', 'signup', 'index']
  if (normals.indexOf(ctx.params.action) > -1) {
    await render(ctx, 'home', ctx.params.action)
  }else{
    await render(ctx, 'resume', 'index')
  }
  
});

router.get('/resume/:uname',  async (ctx, next) =>{
  await render(ctx, 'resume', 'index')
});


router.get('/:controller/:action',  async (ctx, next) =>{
  await render(ctx, ctx.params.controller, ctx.params.action)
});

router.post('/:action',  async (ctx, next) =>{
  let contr = require('./app/controllers/home')
  await contr['post_' + ctx.params.action](ctx, next)
});

router.post('/:controller/:action',  async (ctx, next) =>{
  let contr = require('./app/controllers/' + ctx.params.controller)
  await contr['post_' + ctx.params.action](ctx, next)
});



app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(2000)
console.log('服务器启动...')


      
