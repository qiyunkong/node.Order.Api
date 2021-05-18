//导入模块
const User              =     require('../../model/User')
const {validateId}    =     require('../../check/public/index')

//导出模块
module.exports = async cxt => {
    // 获取用户id
    const id = cxt.params['id'];
    // 数据格式校验
    const {error} = validateId(id);
    //格式不符合要求
    if(error) return cxt.body = { message: error.message }
    //格式符合要求 继续向下执行
    // 查询用户信息
    const user = await User.findById(id).select('-password');
    //响应
    cxt.body = {
        code: 0,
        data: user,
        msg: '查询成功',
    }

};