const DB = require('../../lib/db')

module.exports = DB.bookshelf.Model.extend({
  tableName: 'mem',
  constructor: function() {
    DB.bookshelf.Model.apply(this, arguments);
    this.avatar = this.avatar || 'http://awesomes.img-cn-beijing.aliyuncs.com/mem/151014235057-52.jpg'
  }
})
