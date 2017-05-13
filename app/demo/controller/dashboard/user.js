'use strict';


exports.user = {
	add: async function() {
		let data = {
			id: this.request.body.id,
			pwd: this.request.body.pwd,
			name: this.request.body.name,
			sex: this.request.body.sex 
		}
		let user = this.mongo('user');
		let result = await user.add(data);
		this.body = result;
		return ;
	},
	checkPwd: async function() {
		let data = {
			id: this.request.body.id,
			pwd: this.request.body.pwd
		};
		this.body = await this.mongo('user').find(data);
		// this.body = 'sss';
		return ;
	},
	list: async function() {
		let data = {};
		this.body = await this.mongo('user').find(data);
		return ;
	}
}