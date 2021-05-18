//用户模块
const User       =     require('../../model/User')

module.exports = async ctx => {
    // 查询用户信息
    const users = await User.find().select('-password').sort('-createTime')
    // 响应
    ctx.body = {code:200,msg:"success",content:'获取用户列表成功',data:users}
}