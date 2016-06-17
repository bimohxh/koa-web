const Table = require('../../lib/table')

exports.get_index = async (ctx, next) =>{
  
}

exports.get_edit = async (ctx, next) =>{
  
}


exports.post_plates = async (ctx, next) =>{
  let plates = await Table.ResumePlate.where({resume_id: 1}).fetchAll()
  
  ctx.body = {
    items: plates
  }
}
