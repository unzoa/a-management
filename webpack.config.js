var path = require('path');
var webpack = require('webpack');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var TEM_PATH = path.resolve(APP_PATH,"temp");

module.exports = {
  entry:require('./config/webpack.entry.js'),
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    // 注意 我们修改了bundle.js 用一个数组[name]来代替，
    // 他会根据entry的入口文件名称生成多个js文件，
    // 这里就是(app.js,mobile.js和vendors.js)
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': APP_PATH
    }
  },
  module: {
    loaders: [
    	{
	        test: /\.js[x]?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['env']
	        }
      	},
      	{
	        test: /\.css$/,
	        loaders: 'style-loader!css-loader',
	        include: APP_PATH
      	},
	      {
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        loader: 'url-loader',
	        options: {
	          limit: 10000,
	      }
	    },
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins:require('./config/webpack.plugins.js'),
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 1992,
    proxy: {
      '/api':{
        target: 'http://192.168.0.22:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        },
      }
    }
  }
};