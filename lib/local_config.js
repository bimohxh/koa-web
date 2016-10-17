const fs = require("fs")

if(!global.localEnv){
  global.localEnv = require('../config/local_env.rule.js')
  
  if (fs.existsSync(__dirname + '/config/local_env.json')) {
    global.localEnv = require('../config/local_env')
  }

}


module.exports = global.localEnv