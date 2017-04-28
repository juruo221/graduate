var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require("webpack");
   	module.exports = {
    	entry: ["./src/home/index.js"],
    	output: {
    		path: __dirname + '/static/js',
        publicPath: '/demo/static/js',
       filename: '[name].js',
       chunkFilename: '[id].[chunkhash].js'
    	}, 
  	 	module: { 
        rules: [
          //解析VUE文件，vue最主要的就是用到了这个vue-loader，这才是解析vue文件的关键 
          //但是因为vue文件里面又包含有css和js，所以才用到了后面的几个loader 
          {test: /\.vue$/,loader: "vue-loader"}, 
          //解析JS文件 
          {test: /\.js$/,loader: 'babel-loader'},
          //解析css
          {test: /\.css$/,loader: "style!css"},
          //解析html
          { test: /\.(html|tpl)$/, loader: 'html-loader' },
          //解析jxp
          // { rest: /}
        ] 
   		},
   		//使用es5语法
   		// babell: {
     //    presets: ['es2015']
     //    plugins: ['transform-runtime'] //这个必须install babel-plugin-transform-runtime
    	// },
    	resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js 
       extensions: ['.js','.css', '.vue'],
       alias: {
            'Vue': 'vue/dist/vue.esm.js'
        }
    	},
      plugins: [
        new HtmlWebpackPlugin({
            // filename: '/static/index.html',
            // template: __dirname + '/views/home.html',
            template: __dirname + '/static/html/home.html',
            filename: __dirname + '/views/home.html',
            inject: true
        })
      ],
      watch: true
	};
