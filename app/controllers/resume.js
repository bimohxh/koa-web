const Table = require('../../lib/table'),
      path = require('path')

exports.get_index = async (ctx, next) =>{
  
}

exports.get_edit = async (ctx, next) =>{
  
}


exports.get_design = async (ctx, next) =>{
  let resume = await Table.Resume.where({id: 1}).fetch()
  let themes = await Table.Theme.where({}).fetchAll()
  return {
    themes: themes.toJSON(),
    resume: resume.toJSON()
  }
}


exports.get_publish = async (ctx, next) =>{
  
}

//- 切换模板
exports.post_switch_theme = async (ctx, next) =>{
  let theme = (await Table.Theme.where({id: ctx.request.body.tid}).fetch()).toJSON()
  let resume = await Table.Resume.where({id: 1}).fetch()
  await resume.set({theme_id: ctx.request.body.tid}).save()
  let jade = require('jade');
  ctx.body = {
    con: jade.renderFile(path.dirname(__dirname) + '/views/theme/_' + theme.key  + '.jade', {resume: resume}),
    theme: theme
  }
}


exports.post_index = async (ctx, next) =>{
  let resume = await Table.Resume.where({id: 1}).fetch({withRelated: ['info', 'skills']})
  
  ctx.body = resume
}








