window.Core = {
  /**
   * 暴露当前类到指定的全局命名空间下
   * @param  {string} Controller 控制器名
   * @param  {string} action     action名
   * @param  {class} myClass    要暴露的类
   * @return {void}           
   */
  expose: (Controller, action, myClass)=> {
    if (!window.APP) {window.APP = {}}
    if (!window.APP[Controller]) {window.APP[Controller] = {}}
    window.APP[Controller][action] =  myClass
  }
}
