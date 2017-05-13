import Vue from 'Vue'
import VueRouter from 'vue-router'
import Favlist from './components/Favlist.vue'
import homeInfo from './components/homeInfo.vue'

Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/v1/login' },
	{ path: '/v1/:id',component: Favlist, 
		children: [
			{ path: ':page', component: homeInfo}
		]
	}
]

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router
})

