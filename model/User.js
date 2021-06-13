//引入模块
const mongoose      =       require('mongoose')
const bcrypt        =       require('bcrypt')                  // hash密码
const {adminUser}   =       require('../config/modelInItConfig')

//模型规则类
const { Schema } = mongoose

//用户集合规则  type 类型  required 是否必须  unique 唯一 
const UserSchema = new Schema({
    
    //昵称
    nickName:{                    
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },

    //邮件
    email:{                      
        type:String,
        required:true,
        unique:true,
    },

    //邮件
    phone:String,                   

    //密码
    password:{
        type:String,
        required:true
    },

    //头像
    avatar:{                        
        type:String,
        default:'/avatar/default.svg'
    },

    //创建时间
    createTime:{                     
        type:Date,
        default:Date.now
    },

    //是否授权
    status:{                        
        type:Number,
        required:true,
        default:1
    },

    //角色id
    roleId:{type:Schema.Types.ObjectId, ref: 'Role'},


},{versionKey: false})

//建立用户集合类
const User = mongoose.model('User',UserSchema)

//初始化管理员
User.findOne({'email': 'admin@jsfei.cn'}).then(async result => {
	if (result == null) {
		// 生成盐
		const salt = await bcrypt.genSalt(10)
		// 使用盐对密码进行加密
		const password = await bcrypt.hash(adminUser.password, salt)
    //加密后的密码
    adminUser.password= password
    //创建用户
    const dataresult = await User.create(adminUser);
	}
})

module.exports = User