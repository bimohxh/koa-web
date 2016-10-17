let model;

class Signin extends Basic {
  constructor(){
    super();
    model = this;

    this.register(['submit'])
  }

  submit(){
    if(!$('#form-signin').valid()){return false}
    $.post('/signin', model.mvvm.mem, (data)=> {
      if (data) {
        Core.alert('success', '登录成功')
        window.location.href = '/mem'
      }else{
        Core.alert('danger', '登录失败，用户名或密码错误')
      }
      
    })
  }
}
Core.expose('home', 'signin', Signin)