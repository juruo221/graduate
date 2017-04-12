var Webpack = require("webpack");
   	module.exports = {
    	entry: ["./src/home/index.js"],
    	output: {
    		path: __dirname + '/static/js',
        	filename: "home.js"
    	}, 
  	 	module: { 
        loaders: [
          //解析VUE文件，vue最主要的就是用到了这个vue-loader，这才是解析vue文件的关键 
          //但是因为vue文件里面又包含有css和js，所以才用到了后面的几个loader 
          {test: /\.vue$/,loader: "vue"}, 
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
       extensions: ['.js','.css', '.vue']
    	}
	};
