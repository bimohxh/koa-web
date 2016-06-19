const DB = require('../../lib/db'),
      PlateInfo = require('./plate_info'),
      Plate = require('./plate')


module.exports = DB.bookshelf.Model.extend({
  tableName: 'resume_plate',
  /*plate: function(){
    return this.belongsTo(Plate);
  },
  plate_info: function() {
    return this.hasOne(PlateInfo);
  },
  plate_skills: function() {
    return this.hasMany(PlateSkill);
  }*/
  

})
