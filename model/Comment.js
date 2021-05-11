//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

//评论集合规则 type 类型  required 是否必须 unique 唯一
const CommentSchema = new Schema({

    //服务态度打分
    serviceScore:{
        type:Double,
        required:true
    },
    //出餐速度打分
    speedScore:{
        type:Double,
        require:true
    },
    //使用愿意使用小程序
    useStatus:{
        type:Boolean,
        require:true
    },
    //商品 商品名  点赞  不点赞    商品==id&点赞==true
    productId:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    //订单ID  有点单可以不评论, 有评论一定有订单    
    orderId:{
        type:Schema.Types.ObjectId,
        ref:'Order'
    },
    //评论  
    content:{
        type:String,
        maxlength:200
    } 
})

const Comment = mongoose.model("Comment",CommentSchema)

module.exports = Comment;