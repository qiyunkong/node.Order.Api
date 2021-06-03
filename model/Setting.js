//引入模块
const mongoose = require('mongoose')
const {adminSetting} = require('../config/modelInItConfig')


const { Schema } = mongoose;

const SettingSchema = new Schema({

    //网站logo
    logo:String,
    
    //网站名称
    title:{
      type:String,
      required:true,
      minlength:2,
      maxlength:30,
    },

    //系统全名称
    name:{
      type:String,
      required:true
    },

    //系统简称
    shortName:{
        type:String,
        required:true,
    },

    //英文名称
    eName:{
        type:String,
    },

    webDesc:{
        type:String,
        required:true
    },

    //评论是否开启
    comment:{
        type:Boolean,
        required:true,
        default:false
    },

    //是否人工审核
    review:{
        type:Boolean,
        required:true,
        default:false
    },

    //图片网站路径
    staticSrc:{
      type:String
    },



}, {versionKey: false})

// 系统配置集合类
const Setting = mongoose.model('Setting', SettingSchema)

//初始化系统配置
Setting.find({}).then(async result => {
    if (result.length == 0) {
        //创建系统配置
        const dataResult = await Setting.create(adminSetting);
    }
})




// 导出对象
module.exports = Setting