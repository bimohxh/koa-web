let model;

class Index extends Basic {
  constructor(){
    super({
      vue: {
        data: {
          items: [
            {
              name: 'hxh',
              age: 24
            },
            {
              name: 'Tom',
              age: 36
            }
          ]
        }
      }
    });
    this.say()
    model = this;
  }

  say () {
    console.log('妈的')
  }
}
Core.expose('home', 'index', Index)
