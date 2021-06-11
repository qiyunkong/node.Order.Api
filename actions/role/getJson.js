//用户模块
const Role           =     require('../../model/Role')
const {queryJson}    =    require('../.././servers/role')
module.exports = async cxt => {
  //获取参数
  const options = cxt.request.query
  const httpData = await queryJson()
  cxt.body = httpData
}