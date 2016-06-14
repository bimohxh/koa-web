let model;

class Signup extends Basic {
  constructor(){
    super();
    model = this;

    this.register(['submit'])
  }

  submit(){
    
    Core.alert('success', '注册成功')
  }
}
Core.expose('home', 'signup', Signup)
