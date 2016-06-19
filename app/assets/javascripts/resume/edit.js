let model;

class Edit extends Basic {
  constructor(){
    super({
      vue: {
        data: {
          resume: {}
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
    $.post('/resume/' + Rid + '/index', {}, (data)=> {
      /*model.mvvm.plates = _.reduce(data.items, (result, item)=> {
        result[item.plate.key] = item.plate
        result[item.plate.key].data = item['plate_' + item.plate.key]
        return result
      }, {})*/
      model.mvvm.resume = data
    })
  }
}
Core.expose('resume', 'edit', Edit)
