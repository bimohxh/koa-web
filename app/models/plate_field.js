const DB = require('../../lib/db')

module.exports = DB.bookshelf.Model.extend({
  tableName: 'plate_field'
})
