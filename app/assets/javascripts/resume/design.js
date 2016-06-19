let model;

class Design extends Basic {
  constructor(){
    super({
      vue: {
        data: {
          theme: {},
          resumeRaw: ''
        }
      }
    });
    model = this;

    this.register(['switchTheme'])
    this.switchTheme(TID)
  }

  
  /**
    切换主题
  */
  switchTheme(themeID){
    $.post('/resume/1/switch_theme', {tid: themeID}, (data)=> {
      model.mvvm.resumeRaw = data.con
      model.mvvm.theme = data.theme
    })
  }


}
Core.expose('resume', 'design', Design)
