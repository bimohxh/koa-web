let model;

class Edit extends Basic {
  constructor(){
    super({
      vue: {
        data: {
          resume: {},
          plates: []
        }
      }
    });
    model = this;

    this.register([])
    this.getResume()
    this.getPlates()

    
  }

  /**
   * 获取当前用到的版块和内容
   */
  getResume(){
    $.post('/resume/' + Rid + '/index', {}, (data)=> {
      model.mvvm.resume = data
    })
  }

  /**
    获取所有版块
  */
  getPlates(){
    $.post('/resume/' + Rid + '/plates', {}, (data)=> {
      model.mvvm.plates = data
    })
  }

}
Core.expose('resume', 'edit', Edit)
