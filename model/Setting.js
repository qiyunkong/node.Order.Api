//引入模块
const mongoose = require('mongoose')

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

    //系统名称
    name:{
        type:String,
        required:true
    },

    //系统简称
    short_name:{
        type:String,
        required:true,
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
    }

}, {versionKey: false})

// 系统配置集合类
const Setting = mongoose.model('Setting', SettingSchema)

// 导出对象
module.exports = Setting