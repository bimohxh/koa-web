let model;
/**
 * 基础类，包含一些公用的方法和属性
 */

class Basic {
  constructor(initData = {}){
    require('../../stylesheets/' + SITE.router.controller + '.scss')

    model = this
    
    let mvvmDefault = {
      el: '#app'
    }


    /**
     * 扩展 vue 对象 computed 、 components
     */
    _.each(initData.vue, (v, k)=> {
      if (_.has(mvvmDefault, k)) {
        mvvmDefault[k] = _.extend(mvvmDefault[k], v)
      }else{
        mvvmDefault[k] = v
      }
    })

    /**
     * vue 实例化 子类中也会用到
     * 子类通过 this.mvvm.$set() 添加vue data 数据
     * 子类通过 this.register([]) 注册 vue methods
     */
    
    console.log('==', JSON.stringify(initData))
    this.mvvm = new Vue(mvvmDefault)
    
    window.MVVM = this.mvvm
  }
  
  /**
   * 注册某些方法到 vue 上
   * @param  {string} method 方法名
   * @return {void}        
   */
  register(methods){
    methods.forEach((item)=> {
      this.mvvm[item] = this[item]
    })
  }

}


window.Basic = Basic
