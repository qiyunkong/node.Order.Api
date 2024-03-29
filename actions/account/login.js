//导入模块
const {pick}            =     require('lodash')
const {compare}         =     require('bcrypt')
const User              =     require('../../model/User')
const {validateLogin}   =     require('../../check/user')
const jwt            =        require('jsonwebtoken')
const { SECRET }      =       require('../../config/constantsConfig')

module.exports = async (cxt) => {
    //获取POST参数
    const data = cxt.request.body
    // 数据格式校验
    const { error } = validateLogin(data)
    // 格式不符合要求
   if (error) {
       cxt.response.status = 406
       cxt.body = {code:406,msg:"error",content: error.message}
       return
   }
    // 查找用户
    let user = await User.findOne({email: data.email})
    // 如果用户不存在 响应
    if (!user) {
        cxt.response.status = 401
        cxt.body = { code:401, msg:"error", content:'邮箱地址或者密码错误' }
        return
    }
    // 如果用户存在 验证密码 返回布尔值
    const validPassword = await compare(data.password, user.password)
    // 密码错误 响应
    if (!validPassword){
        cxt.response.status = 400
        cxt.body = { code:400, msg:"error", content:'邮箱地址或者密码错误' }
        return
    }

    //设置加密 token
    let token = null
    //console.log(user);
    //let json = data.toJSON()
    token = jwt.sign({id:user._id}, SECRET, { expiresIn:60*60 })


    // 响应
    cxt.body =  {
        code:200,
        msg:"success",
        content:'登录成功',
        data:token
    }

};