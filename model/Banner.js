//引入模块
const mongoose      =       require('mongoose');

//模型规则类
const { Schema } = mongoose;

//轮播集合规则  type 类型  required 是否必须  unique 唯一 
const CarouselSchema = new Schema({
    
    //标题
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:100,
    },

    //描述
    describe:String,

    //是否展示
    status:{
        type:Number,
        required:true,
        default:1
    },

    //图片路径
    src:{
        type:String,
        required:true,
    }

})

const Banner = mongoose.model('Banner',CarouselSchema)

//暴露模块
module.exports = Banner