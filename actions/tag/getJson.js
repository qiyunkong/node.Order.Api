//用户模块
const Tag           =     require('../../model/Tag')
const {queryJson}    =    require('../.././servers/tag')
module.exports = async cxt => {
  //获取参数
  const options = cxt.request.query
  const httpData = await queryJson()
  cxt.body = httpData
}