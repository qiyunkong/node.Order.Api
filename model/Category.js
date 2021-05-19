//引入数据库
const mongoose = require('mongoose')

//模型规则类
const { Schema } = mongoose

//配置用户表的数据格式
const categorySchema = new Schema({
    
    //分类名称
    name:String,

    //子分类  是否子分类    存放父节点ID
    parentId:{
        type:String,
        default:'0'
    },

    //是否展示
    status:{                        
        type:Number,
        required:true,
        default:1
    },

    //描述
    desc:{
        type:String,
        maxlength:200
    },

    //创建时间
    createTime:{
        type:Date,
        default:Date.now
    }

})

//建立用户集合类
const Category = mongoose.model('Category',categorySchema);
module.exports = Category;