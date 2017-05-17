'use strict';


exports.blog = {
	add: async function() {
		let data = {
			user_id: this.request.body.user_id,
			id: this.request.body.id,
			date: this.request.body.date,
			guandian: this.request.body.guandian, 
			zhuanfa: this.request.body.zhuanfa,
			discuss: this.request.body.discuss,
			praise: this.request.body.praise
		}
		let blog = this.mongo('blog');
		let result = await blog.add(data);
		this.body = result;
		return ;
	},
	checkPwd: async function() {
		let friends = this.request.body.friends;
		this.body = await this.mongo('user').find(friends);
		// this.body = 'sss';
		return ;
	},
	list: async function() {
		let data = {};
		this.body = await this.mongo('user').find(data);
		return ;
	}
}