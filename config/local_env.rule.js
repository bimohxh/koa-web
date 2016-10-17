// This is the default site server config
// if you want to change the config, we don't recommand to change this file 
// the right way is create a file `local_env.json` and set you config


module.exports = {

  // 当前环境
  // development  开发环境
  // production 生产环境
  "environment": "development",

  // 程序运行接口
  "port": "2008",

 
  // 开发环境下的热加载配置
  "hotLoad": {

    // 是否启用热加载
    enable: true,

    // 热加载代理接口，也是我们在开发环境中实际访问的地址
    port: "2002",

    // browser-sync 本身的管理界面端口
    ui: "2001"

  }
}