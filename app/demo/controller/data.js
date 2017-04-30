'use strict';


exports.session = async function() {
  this.session.test = this.session.test || 0;
  this.session.test++;

  this.body = this.session.test
}

exports.info = {
	repo: async function() {
		await this.proxy('demo:home')
	}
}
