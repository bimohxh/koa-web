'use strict';
require("babel-polyfill");

const Koa = require('koa'),
      views = require('koa-views'),
      router = require('koa-router')(),
      _ = require('underscore'),
      orm = require("orm")

const app = new Koa()


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

router.get('/',  async (ctx, next) =>{
  await render(ctx, 'home', 'index')
});


router.get('/:controller/:action',  async (ctx, next) =>{
  let contr = require('./app/controllers/' + ctx.params.controller)
  let para = await contr[ctx.params.action](ctx, next)
  await render(ctx, ctx.params.controller, ctx.params.action, para)
});



app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000)
console.log('服务器启动...')


      