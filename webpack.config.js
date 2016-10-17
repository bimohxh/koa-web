const webpack = require('webpack')
const WH = require('./tool/webpack_helper')

module.exports = {
  entry: WH.makeEntry(),
  output: {
    path: __dirname + '/tmp/assets/javascripts',
    filename: '[name]'
  },
  resolve: {
    alias: {
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