//引入模块
const { pick }           =     require('lodash')
const Category           =     require('../../model/Category')
const { validateId }     =     require('../../check/public/index')
const {updateId}         =     require('../../servers/base')
module.exports = async ctx => {
    //获取POST参数
    const data = ctx.request.body
    console.log(data);
    //验证
    const {error} = validateId(data._id)
    //数据格式没有通过验证
    if(error){
        ctx.response.status = 400
        ctx.body = {code:400,msg:"error",content: error.message}
        return
    }
    //通过验证
    let Category = await updateId(data,Category)
    //响应
    ctx.response.status = 201
    ctx.body = {code:201,msg:"success",data:Category}
}