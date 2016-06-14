"use strict";

const fs = require("fs"),
      exec = require('child_process').execSync,
      path = require('path');

let timeDiff = (start)=> {
  return (Date.now() - start) / 1000 
}


/**
 * 执行自动化任务
 * @param  {string} cmds 命令集合
 */
exports.build =  (cmd, tip)=> { 
  let start = Date.now()
  let prev = Date.now()
  console.log(('[' + tip + '] 开始 ...'))
  exec(cmd)
  console.log(('[' + tip + '] 完成，耗时 ' + timeDiff(prev) + ' 秒'))
  //console.log(('所有任务完成，耗时 ' + timeDiff(start) + ' 秒').magenta)
}


