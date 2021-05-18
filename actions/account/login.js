//导入模块
const {pick}            =     require('lodash')
const bcrypt            =     require('bcrypt')
const User              =     require('../../model/User')
const {validateLogin}   =     require('../../check/user')

module.exports = async (ctx) => {

    //获取POST参数
    const data = ctx.request.body
    // 数据格式校验
    const { error } = validateLogin(pick(data, [ 'email', 'password']))
    // 格式不符合要求
   if (error) {
       ctx.response.status = 406
       ctx.body = {code:406,msg:"error",content: error.message}
       return
   }
    // 查找用户
    let user = await User.findOne({email: data.email})
    // 如果用户不存在 响应
    if (!user) {
        ctx.response.status = 401
        ctx.body = { code:401, msg:"error", content:'邮箱地址或者密码错误' }
        return
    }
    // 如果用户存在 验证密码 返回布尔值
    const validPassword = await bcrypt.compare(data.password, user.password)
    // 密码错误 响应
    if (!validPassword){
        ctx.response.status = 400
        ctx.body = { code:400, msg:"error", content:'邮箱地址或者密码错误' }
        return
    }

    // 将用户信息存储在session cookie中
    ctx.cookies.set('userInfo',JSON.stringify(user),{
       maxAge:60*1000,
    })

    // 响应
    ctx.body =  {
        code:200,
        msg:"success",
        content:'登录成功',
        data:pick(user, ['nickName', 'email', 'role', 'avatar', '_id', 'status', 'createTime'])
    }

};