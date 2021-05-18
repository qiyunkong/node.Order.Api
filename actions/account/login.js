//导入模块
const {pick}            =     require('lodash')
const bcrypt            =     require('bcrypt')
const User           =     require('../../model/User')
const {validateLogin}   =     require('../../check/user')

module.exports = async (cxt) => {
    console.log(1);
    //获取POST参数
    const data = cxt.request.body
    console.log(data);
    // 数据格式校验
    //const { error } = validateLogin(data);
    // 格式不符合要求
   // if (error) return cxt.body = {code:401,message: error.message}
    // 查找用户
    let user = await User.findOne({email: data.email});
    console.log(user);
    // 如果用户不存在 响应
    if (!user) return cxt.body = {code:400,message: '邮箱地址或者密码错误'};
    console.log(user.password);
    // 如果用户存在 验证密码 返回布尔值
    const validPassword = await bcrypt.compare(data.password, user.password);
    // 密码错误 响应
    if (!validPassword) return cxt.body = {code:400,message: '邮箱地址或者密码错误'};
    // 将用户信息存储在session中
    cxt.cookies.set('userInfo',JSON.stringify(user),{
       maxAge:60*1000,
    }) ;
    // 响应
    cxt.body = pick(user, ['nickName', 'email', 'role', 'avatar', '_id', 'status', 'createTime']);
};