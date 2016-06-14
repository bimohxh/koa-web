"use strict";

var chokidar = require('chokidar'),
    path = require('path'),
    Task = require('./task')

const getCmd = (filepath)=> {
  switch(path.extname(filepath)){
    case '.scss':
      var cmd = 'node-sass --output-style compressed ' + filepath + ' ./tmp/assets/stylesheets/' + path.basename(filepath, '.scss') + '.css'
      return [cmd, '编译Sass']

    case '.js': 
      var cmd = 'webpack --entry ./' + filepath + ' --output-filename ' + filepath.replace('app', 'tmp')
      return [cmd, 'webpack 打包']
  }
  return null
}


chokidar.watch(['./app/assets/stylesheets/', './app/assets/javascripts/']).on('all', (event, filepath) => { 
  if (path.basename(filepath).indexOf('.') > -1) {
    let cs = getCmd(filepath)
    if(cs){
      Task.build(cs[0], cs[1])
    }
  }
  
});

console.log('开发中....')


