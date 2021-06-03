//引入模块
const mongoose = require('mongoose')
const {adminMenu}   = require('../config/modelInItConfig')
const { Schema } = mongoose;

const ModelDvaSchema = new Schema({

  //表名称
  name:String,
  //表中文名称
  nameDva:String,
  //表类型
  schemaDva:Array,
  //JSON表头
  columnsTable:Array,
  //JSON表单
  columnsFrom:Array,
  //是否有关联表
  keyDva:Array,
  //数据量
  sum:{
    type:Number,
    default:0
  },
  //创建时间
  createTime:{
    type:Date,
    default:Date.now
  },
  //描述
  desc:String




}, {versionKey: false})

// 系统机甲集合类
const ModelDva = mongoose.model('ModelDva', ModelDvaSchema)




// 导出对象
module.exports = ModelDva