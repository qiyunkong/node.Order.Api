//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

//设置用户表的数据格式
const productSchema = new Schema({
    imageList:Array, // [图片1的name,图片2的name...]
    name:String, //商品的名字
    desc:String, //商品的描述
    price:String,//商品价格
    categoryId:String,  //分类Id
    createTime:Date.now  //创建时间

})


const Product = mongoose.model('Product',productSchema)
module.exports = Product
