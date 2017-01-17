
var path = require('path');
var fs = require('fs');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.js$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: './',
    proxy: [{
      path: `/v1/**`,
      target: 'http://localhost:8081',
      secure: false,
      pathRewrite: {
        "^/v1": ""
      }
    }],
  }
}
