let model;

class Signin extends Basic {
  constructor(){
    super();
    model = this;

    this.register(['submit'])
  }

  submit(){
    Core.alert('success', '登陆成功')
  }
}
Core.expose('home', 'signin', Signin)
