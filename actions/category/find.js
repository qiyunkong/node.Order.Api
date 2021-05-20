//用户模块
const Category       =     require('../../model/Category')

module.exports = async ctx => {
    // 查询用户信息
    const result = await Category.find().sort('-createTime')
    // 响应
    ctx.body = {code:200,msg:"success",content:'获取用户列表成功',data:result}
}