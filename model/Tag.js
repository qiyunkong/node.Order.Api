//引入模块
const mongoose      =       require('mongoose')

//模型规则类
const { Schema } = mongoose

const tagSchema = new Schema({

    //标签内容
    content:{
        type:String,
        maxlength:20,
    },

    //标签颜色
    color:{
        type:String,
        maxlength:32
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

const Tag = mongoose.model('Tag',tagSchema)

module.exports = Empower