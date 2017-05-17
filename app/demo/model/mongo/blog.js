'use strict';

// model名称，即表名
exports.model = 'blog';

// 表结构
exports.schema = [{
  user_id: {type: String, unique: true, required: true},
  id: {type: String, unique: true, required: true},
  date: {type: Date, required: true},
  guandian: { type: String},
  zhuanfa: {type: String},
  discuss: {type: String},
  praise: {type: Number}
}, {
  autoIndex: true,
  versionKey: false
}];

// 静态方法:http://mongoosejs.com/docs/guide.html#statics
exports.statics = {}

// http://mongoosejs.com/docs/guide.html#methods
exports.methods = {
  add: async function(str) {
    let blog_model = this.model('blog');
    let result = new blog_model(str);
    result.save(function(err){
      if (err){
        return 'err';
      }
    });
    return 'true';
  },
  list: async function() {
    return this.model('blog').find();
  }
}