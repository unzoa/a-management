var path = require('path');
var webpack = require('webpack');
var TEM_PATH = path.resolve(__dirname, '../app/temp');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var configEntry = [];


configEntry.push(new webpack.HotModuleReplacementPlugin());
configEntry.push(new OpenBrowserPlugin({
    url: 'http://localhost:1992'
}));
configEntry.push(new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
}));
configEntry.push(new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }));

//创建HtmlWebpackPlugin的实例，生成页面
configEntry.push(new HtmlwebpackPlugin({
  title: 'index',
  template: path.resolve(TEM_PATH, 'index.html'),
  filename: 'index.html',
  //chunks这个参数告诉插件要引用entry里面的哪几个入口
  chunks: ['app', 'vendor'],
  //要把script插入到标签里
  inject: 'body',
  hash:true
}));
configEntry.push(new HtmlwebpackPlugin({
  title: 'Mobile',
  template: path.resolve(TEM_PATH, 'mobile/mobile.html'),
  filename: 'app/mobile.html',
  chunks: ['mobile', 'vendor'],
  inject: 'body',
  hash:true
}));
configEntry.push(new HtmlwebpackPlugin({
  title: 'Mobile',
  template: path.resolve(TEM_PATH, 'mobile/mobile2.html'),
  filename: 'app/mobile2.html',
  chunks: ['mobile2', 'vendor'],
  inject: 'body',
  hash:true
}));
configEntry.push(new HtmlwebpackPlugin({
  title: 'Mobile',
  template: path.resolve(TEM_PATH, 'mobile/mobile3.html'),
  filename: 'app/mobile3.html',
  chunks: ['mobile3', 'vendor'],
  inject: 'body',
  hash:true
}));
configEntry.push(new HtmlwebpackPlugin({
  title: 'auth',
  template: path.resolve(TEM_PATH, 'test2/auth.html'),
  filename: 'app/auth.html',
  chunks: ['auth', 'vendor'],
  inject: 'body',
  hash:true
}));
configEntry.push(new HtmlwebpackPlugin({
  title: 'bumen',
  template: path.resolve(TEM_PATH, 'test2/bumen.html'),
  filename: 'app/bumen.html',
  chunks: ['bumen', 'vendor'],
  inject: 'body',
  hash:true
}));

module.exports = configEntry;