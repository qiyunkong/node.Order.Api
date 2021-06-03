//用户模块
const Order           =     require('../../model/Order')
const {queryList}     =     require('../../servers/base')
module.exports = async cxt => {
  //获取GET参数
  const options = cxt.request.query
  const httpData = await queryList(options,Order)
  cxt.body = httpData
}