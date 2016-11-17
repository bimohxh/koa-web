import vuenews from '../../../components/news/news.vue'
let model

class Index extends Basic {
  constructor(){
    super({
      vue: {
        components: {
          'vue-news': vuenews
        }
      }
    })
    model = this
  }
}


Core.expose('home', 'index', Index)