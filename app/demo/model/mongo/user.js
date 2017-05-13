'use strict';

// model名称，即表名
exports.model = 'user';

// 表结构
exports.schema = [{
  id: {type: String,unique: true,required: true},
  pwd: {type: String,required: true},
  name: {type: String,required: true},
  sex: {type: Boolean,required: true}
}, {
  autoIndex: true,
  versionKey: false
}];

// 静态方法:http://mongoosejs.com/docs/guide.html#statics
exports.statics = {}

// http://mongoosejs.com/docs/guide.html#methods
exports.methods = {
  add: async function(str) {
    // return await this.model('user').create({id:'id',pwd:'pwd',name:'name',sex:true},function(err,small){
    //   if (err){
    //     return 'error';
    //   }else {
    //     return 'right';
    //   }
    // });

    let user_model = this.model('user');
    let result = new user_model(str);
    result.save(function(err){
      if (err){
        return 'err';
      }
    });
    return 'true';
  },
  find: async function(str) {
    return this.model('user').find(str);
  }
}