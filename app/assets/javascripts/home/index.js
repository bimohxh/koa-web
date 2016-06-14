let model;

class Index extends Basic {
  constructor(){
    super();
    model = this;
  }
}
Core.expose('home', 'index', Index)
