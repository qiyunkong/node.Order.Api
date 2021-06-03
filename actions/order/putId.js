//引入模块
const Order              =     require('../../model/Order')
const { validateId }     =     require('../../check/public')
const { updateId }       =     require('../../servers/base')
module.exports = async cxt => {
  //获取POST参数
  const body = cxt.request.body
  //验证ID格式是否正确
  const {error} = validateId(body._id)
  //数据格式没有通过验证
  if(error){
    cxt.response.status = 400
    cxt.body = {code:400,msg:"error",content: error.message}
    return
  }
  //通过验证
  let httpData = await updateId(body,Order)
  //响应
  cxt.response.status = httpData.code
  cxt.body = httpData
}