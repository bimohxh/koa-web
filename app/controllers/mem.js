const Table = require('../../lib/table')

exports.get_index = async (ctx, next) =>{
  let resumes = await Table.Resume.where({mem_id: 1}).fetchAll()
  return {
    resumes: resumes.models
  }
}