//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

const LogSchema = new Schema({
  //地址
  url:String,
  //请求类型
  method:String,
  //请求状态
  status:Number,
  //来源地址
  referer:String,
  //操作人
  admin:String,
  //创建时间
  createTime:{
    type:Date,
    default:Date.now
  },

})

const Log = mongoose.model('Log',LogSchema)

module.exports = Log