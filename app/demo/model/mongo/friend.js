'use strict';

// model名称，即表名
exports.model = 'friend';

// 表结构
exports.schema = [{
  id: {type: String,unique: true, required: true},
  friends: {type: Array, 'default': []}
}, {
  autoIndex: true,
  versionKey: false
}];

// 静态方法:http://mongoosejs.com/docs/guide.html#statics
exports.statics = {}

// http://mongoosejs.com/docs/guide.html#methods
exports.methods = {
  add: async function(str) {
    let user_model = this.model('friend');
    let result = new user_model(str);
    result.save(function(err){
      if (err){
        return 'err';
      }
    });
    return 'true';
  },
  list: async function() {
    return this.model('friend').find();
  }
}