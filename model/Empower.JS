//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

const empowerSchema = new Schema({

    //设备名称
    name:{
        type:String,
        minlength:2,
        maxlength:30
    },

    //设备标题
    title:{
        type:String,
        maxlength:50.
    },

    //设备类型  小程序  APP  PC
    type:{
        type:String,
        enum:['小程序','APP','PC']
    },

    //设备状态  停用2  正常1
    status:{
        type:Number,
        required:true,
        default:1
    },

    //设备图标
    icon:{
        type:String,
    },

    //设备描述
    desc:{
        type:String,
        maxlength:200
    },

    //设备平台  微信  支付宝   百度
    platform:{
        type:String,
        enum:['微信','支付宝']
    },

    //设备营业
    cycle:{
        type:Array,
        default:["08:00","21::00"]
    },

    //创建时间
    createTime:{                                    
        type:Date,
        default:Date.now               
    },

    //更新时间
    updateTime:{
        type:Date,
        default:Date.now
    },


})

const Empower = mongoose.model('Empower',empowerSchema)

module.exports = Empower