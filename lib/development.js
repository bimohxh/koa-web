const path = require('path'),
      Helper = require('./helper'),
      vendor = require('../config/vendor')

var csss = []
var jss = []

try{
  csss = Helper.walk(path.dirname(__dirname) + '/tmp/assets/stylesheets', 1)
  jss = Helper.walk(path.dirname(__dirname) + '/tmp/assets/javascripts').map((item)=> {
    return '/tmp/' + item.split('/tmp/')[1]
  })
}catch(e){}

exports.assets = {
  stylesheets: csss.map((item)=> {
    return '/tmp/assets/stylesheets/' + path.basename(item)
  }),
  javascripts: jss,
  vendor: vendor
}
