'use strict'

const path = require('path')
const Helper = require('../lib/helper')
const DistFolder = path.dirname(__dirname) + '/app/assets/javascripts'

let makeEntry = () => {
  let entrys = Helper.walk(DistFolder, 2).reduce((last, item) => {
    let _controller = path.basename(path.dirname(item))
    let _action = path.basename(item)
    let nm = 'controller/' + _controller + '/' + _action
    if (_action[0] !== '_') {
      last[nm] = last[nm] || []
      last[nm].push(DistFolder + '/' + _controller + '/' + _action)
    }
    return last
  }, {})
  entrys['common.js'] = Helper.walk('./app/assets/javascripts/common', 1)
  return entrys
}

console.log(makeEntry())
module.exports = {
  makeEntry: makeEntry
}
