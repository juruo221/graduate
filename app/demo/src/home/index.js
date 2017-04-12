// var a=1;
import Vue from 'vue'
import Main from './components/main.vue'
var app = new Vue({
  el: '#app',
  components: {
  	"my-component": Main
  }
})
// var React = require('react');
// var ReactDo = require('react-dom');

// ReactDOM.render(
// 	<h1>Hello,world</h1>,
// 	document.getElementById('example')
// );