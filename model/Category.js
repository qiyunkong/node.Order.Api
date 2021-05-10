//引入数据库
const mongoose = require('mongoose')


//模型规则类
const { Schema } = mongoose;

//配置用户表的数据格式
const categorySchema = new Schema({
    
    //分类名称
    name:String,

    //子分类
    parentId:{
        type:String,
        default:'0'
    }

})

//建立用户集合类
const User = mongoose.model('Categorys',categorySchema);
module.exports = User;