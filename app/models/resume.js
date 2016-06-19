const DB = require('../../lib/db'),
      PlateInfo = require('./plate_info'),
      Plate = require('./plate'),
      PlateSkill = require('./plate_skill'),
      Theme = require('./theme')


module.exports = DB.bookshelf.Model.extend({
  tableName: 'resume',
  info: function() {
    return this.hasOne(PlateInfo);
  },
  skills: function() {
    return this.hasMany(PlateSkill);
  },
  theme: function(){
    return this.belongsTo(Theme)
  }
  

})
