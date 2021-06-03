//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

const OrderSchema = new Schema({

    //订单号  GFH/年/月/日/是否已取消/支付金额/26字母/商品长度/
    orderNo:{
        type:String,
        require:true,
        maxlength:120
    },

    //创建日期
    createTime:{
        type:Date,
        default:Date.now
    },

    //支付状态
    paymentStatus:{
        type:Number,
        required:true,
        default:1
    },

    //支付方式
    paymentType:{
        type: String,
        enum : ['微信','支付宝','现金'],
         default: '微信'
    },

    //金额
    total:{
        type:Number,
        required:true,
    },

    //购买商品[]
    ProductArray:{
        type:Array,
        required:true,
    }
})

//建立订单集合类
const Order = mongoose.model('Order',OrderSchema)

module.exports = Order