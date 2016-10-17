'use strict';
require("babel-polyfill");

const _ = require('underscore'),
      development = require('../lib/development'),
      confs = require('../config/route'),
      vendor = require('../config/vendor')

// 路由
let render = async (ctx, controller, action)=> {
  let contr = require('../app/controllers/' + controller)
  
  let para = {}
  try {
    para = await contr['get_' + action](ctx)
  }catch(ex){}
  

  let vi = controller + '/' + action + '.jade'
  await ctx.render(vi,
    _.extend({
      params: ctx.params,
      route: {
        controller: controller,
        action: action
      },
      development: development,
      localEnv: global.localEnv,
      vendor: vendor

      //query: qs.parse(url.parse(ctx.request.url).query)
    }, para || {})
  )
} 


module.exports = (router)=> {
  return async (ctx, next)=> {
    for(let r in confs){
      router.get(r,  async (ctx, next) =>{
        let vs = confs[r].split('/').map((item)=> {
          return item.replace(/:\w+/g, (word)=> {

            return ctx.params[word.substring(1)]
          })
        })
        await render(ctx, vs[0], vs[1])
      });
    }
    await next()
  }
}