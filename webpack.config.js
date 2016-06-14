const webpack = require("webpack")

module.exports = {
  entry:  __dirname + '/app/assets/javascripts/common/core.js',
  /*entry: {
    order: './src/js/controller/order/index.js'
  },*/
  output: {
    /*path: __dirname + '/tmp/assets/javascripts',*/
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'swiper.jquery.min' : 'libs/swiper.jquery.min.js', 
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015-loose']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
}
 
