//引入模块
const { pick }           =     require('lodash')
const Menu               =     require('../../model/Menu')
const { validateId }     =     require('../../check/public/index')
const { updateId }       =     require('../../servers/base')
module.exports = async cxt => {
  //获取POST参数
  const body = cxt.request.body
  //验证
  const {error} = validateId(body._id)
  //数据格式没有通过验证
  if(error){
    cxt.response.status = 400
    cxt.body = {code:400,msg:"error",content: error.message}
    return
  }
  //通过验证
  let httpData = await updateId(body,Menu)
  //响应
  cxt.response.status = httpData.code
  cxt.body = httpData
}