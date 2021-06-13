//引入模块
const { pick }           =     require('lodash')
const User              =     require('../../model/User')
const { validateId }     =     require('../../check/public/index')
module.exports = async cxt => {
    //获取POST参数
    const data = cxt.request.body
    //将密码、邮箱字段抛出
    data.fileds = pick(data,['nickName','role','avatar','status'])
    data._id = cxt.params['id']
    //验证
    const {error} = validateId(data._id)
    //数据格式没有通过验证
    if(error){
        cxt.response.status = 400
        cxt.body = {code:400,msg:"error",content: error.message}
        return
    }
    //通过验证
    //更新用户信息
    //new:true 返回修改后的文档 默认值为false 返回原式文档
    //fields:'-password' 从返回值中抛除密码字段
    let user = await User.findByIdAndUpdate(data._id,{$set:data}, {new: true, fields: '-password'})
    //响应
    cxt.response.status = 201
    cxt.body = {code:201,msg:"success",data:user}
}