//引入模块
const mongoose = require('mongoose')

//模型规则类
const { Schema } = mongoose;

//设置用户表的数据格式
const roleSchema = new Schema({

    //角色名称
    name:String,                       

    //角色创建的初始时间   必须是函数的形式，不可以是函数()
    createTime:{                                    
        type:Date,
        default:Date.now               
    },
    
    //授权人
    authName:String,                  
    
    //授权时间
    authTime:Date,

    //角色的权限
    menus:{                          
        type:Array,
        default:[]
    }

})

// 系统配置集合类
const Role = mongoose.model('role', roleSchema)

// 导出对象
module.exports = Role