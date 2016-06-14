const path = require('path'),
      Helper = require('./helper')

exports.assets = {
  stylesheets: Helper.walk(path.dirname(__dirname) + '/tmp/assets/stylesheets', 1).map((item)=> {
    return '/tmp/assets/stylesheets/' + path.basename(item)
  }),
  javascripts: Helper.walk(path.dirname(__dirname) + '/tmp/assets/javascripts/common', 1).map((item)=> {
    return '/tmp/assets/javascripts/common/' + path.basename(item)
  }),
}
