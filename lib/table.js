const path = require('path'),
      Helper = require('./helper')



let getTable = ()=> {
  return Helper.walk(path.dirname(__dirname) + '/app/models', 1).reduce((result, item)=> {
    let modelName = path.basename(item, '.js')
    modelName = modelName[0].toUpperCase() + modelName.substring(1)
    result[modelName] = require(item)
    return result
  }, {})
}




module.exports = getTable()