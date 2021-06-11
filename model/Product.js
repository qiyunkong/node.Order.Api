//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

//设置用户表的数据格式
const productSchema = new Schema({
    name:String,            //商品的名字
    desc:String,            //商品的描述
    price:Number,           //商品价格
    status:Boolean,         //是否展示 是否下架
    imageList:Array,        // [图片1的name,图片2的name...]
    specsList:Array,        //规格
    categoryId:Array,       //分类Id
    createTime:{            //创建时间
        type:Date,
        default:Date.now
    },


})


const Product = mongoose.model('Product',productSchema)
module.exports = Product
