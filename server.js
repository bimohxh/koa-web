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
      jwt = require('koa-jwt'),
      i18n = require('koa-i18n'),
      _ = require('underscore')

const app = new Koa()

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

//session 处理
/*app.keys = ['some secret hurr'];
app.use(convert(session(app)));*/

//视图处理
app.use(views(__dirname + '/app/views', {
  map: {
    jade: 'jade'
  }
}));


// 路由
let render = async (ctx, controller, action, extra)=> {
  let vi = controller + '/' + action + '.jade'
  await ctx.render(vi,
    _.extend({
      params: ctx.params,
      route: {
        controller: controller,
        action: action
      },
      //query: qs.parse(url.parse(ctx.request.url).query)
    }, extra || {})
  )
}
 

app.use(jwt({ secret: 'hxh', cookie: 'uid'}))

router.get('/',  async (ctx, next) =>{
  await render(ctx, 'home', 'index')
});


router.get('/:controller/:action',  async (ctx, next) =>{
  let contr = require('./app/controllers/' + ctx.params.controller)
  let para = await contr['get_' + ctx.params.action](ctx, next)
  await render(ctx, ctx.params.controller, ctx.params.action, para)
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


      
