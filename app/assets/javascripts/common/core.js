window.Core = {
  /**
   * 暴露当前类到指定的全局命名空间下
   * @param  {string} Controller 控制器名
   * @param  {string} action     action名
   * @param  {class} myClass    要暴露的类
   * @return {void}           
   */
  expose: (Controller, action, myClass)=> {
    window.APP = window.APP || {}
    window.APP[Controller] = window.APP[Controller] || {}  
    window.APP[Controller][action] =  myClass
  },

  /**
   * 弹出提示框
   * @param  {string} typ 消息类型：success, info, warning, danger
   * @param  {string} msg 消息内容
   * @param  {object} options 额外配置 delay 消失延时 top 距离顶部距离 
   */
  alert: (typ, msg, options)=> {
    options = options || {}
    let delay = options.delay || 3000
    let top = options.top || 10
    let box = $('<div class="alert alert-' + typ + ' alert-tip" role="alert" ><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + msg + '</div>')
    $('body').append(box)
    box.animate({top: top}, ()=> {
      setTimeout(()=> {
        box.remove()
      }, delay)
    })
  },
}
