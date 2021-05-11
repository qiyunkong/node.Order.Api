//引入数据库
const mongoose = require('mongoose')

//模型规则类
const { Schema } = mongoose

//配置用户表的数据格式
const categorySchema = new Schema({
    
    //分类名称
    name:String,

    //子分类  是否子分类    父节点
    parentId:{
        type:String,
        default:'0'
    },

    //是否隐藏
    status:{                        
        type:Number,
        required:true,
        default:1
    },

})

//建立用户集合类
const User = mongoose.model('Categorys',categorySchema);
module.exports = User;