#!/usr/bin/env node

'use strict';

global.Promise = require('bluebird')


const http = require('http');
const fs = require('fs');
const path = require('path');
const utils = require('../src/utils');

const args = utils.parseArg();
const config = global.config = require('../src/config')(args);

require('../src/app').listen(config.site.port);

// var qs = require('querystring');
// console.log( qs.stringify({name: 'real',age:20}) );
// console.log( qs.stringify({学生: '皖林',age:20}) );
// console.log( qs.parse( 'name=皖林&age=12' )); 

// var net = require('net');
// var listenPort = 3000;
// var server = http.createServe(function(req, res){
// 	res.writeHead( 200 );
// 	res.end('hello world');

// 	socket.on('data',function(data){

// 		console.log('recv:' + data);

// 	});
// }).listen(listenPort);

// server.on('listening',function(){
//     console.log("server listening:" + server.address().port);
// });