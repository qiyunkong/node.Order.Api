//导入模块
const _                 =     require('lodash')
const bcrypt            =     require('bcrypt')
const User              =     require('../../model/User')
const {validateUser}    =     require('../../check/user')

//暴露模块
module.exports = async cxt => {
    //获取POST参数
    const data = cxt.request.body
    //数据格式校验
    const { error } = validateUser(data)
    //格式不符合要求
    if(error) return cxt.body = {message: error.message}
    //格式符合要求 继续向下执行
    //查询用户
    let user = await User.findOne({email:data.email})
    //用户已存在
    if (user) return cxt.body = {message: '邮箱已经被注册'}
    //用户不存在 可以正常执行注册流程
    //生成盐
    const salt = await bcrypt.genSalt(10)
    // 使用盐对密码进行加密
    data.password = await bcrypt.hash(data.password, salt)
    //创建用户
    user = new User(data)
    //保存用户
    await user.save()
    //响应
    cxt.body = {
        code: 0,
        data: user,
        msg: '创建用户成功',
    }

}

