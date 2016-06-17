let model;

class Edit extends Basic {
  constructor(){
    super({
      vue: {
        data: {
          plateFields: []
        }
      }
    });
    model = this;

    this.register([])
    this.getPlates()
  }

  /**
   * 获取当前用到的版块和内容
   */
  getPlates(){
    $.post('/resume/' + Rid + '/plates', {}, (data)=> {
      model.mvvm.plateFields = data.items
    })
  }
}
Core.expose('resume', 'edit', Edit)
