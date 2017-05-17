import Vue from 'Vue'
import VueRouter from 'vue-router'
import Favlist from './components/Favlist.vue'
import homeInfo from './components/homeInfo.vue'
import friendInformation from './components/friInformation.vue'
import addFriend from './components/addFriend.vue'
import userPage from './components/userPage.vue'
var io = require('socket.io-client')
console.log(io);
// var socket = io();

Vue.use(VueRouter);

const routes = [
	// { path: '/', redirect: '/v1/login' },
	// { path: '/v1/:id',component: Favlist, 
	// 	children: [
	// 		{ path: ':page', component: homeInfo,
	// 			children:[
	// 				{path: ':friend', component: homeInfo}
	// 			]

	// 		}
	// 	]
	// }
	{ path: '/', redirect: '/v1/login' },
	{ path: '/v1/login',component: Favlist,},
	{ path: '/v1/register',component: Favlist},
	{ path: "/v1/homeInfo/:id",component: homeInfo
		// children: [
		// 	{ path: 'friend', component: homeInfo,
		// 		children:[
		// 			{path: ':zz', component: friendInformation}
		// 		]
		// 	},
		// 	{ path: 'blog', component: homeInfo,
		// 		children:[
		// 			{path: ':friend', component: friendInformation}
		// 		]
		// 	},
		// 	{ path: 'tribe', component: homeInfo,
		// 		children:[
		// 			{path: ':friend', component: friendInformation}
		// 		]
		// 	},
		// 	{ path: 'aboutMe', component: homeInfo,
		// 		children:[
		// 			{path: ':friend', component: friendInformation}
		// 		]
		// 	}
		// ]
	},
	// { path: '/v1/homeInfo/friend',component: homeInfo },
	{ path: '/v1/addFriend',component: addFriend },  
	{ path: '/v1/addFriend/:user',component: userPage },  
	{ path: '/v1/homeInfo/friend/:zz',component: friendInformation }
]

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router
})

