//用户模块
const Menu           =     require('../../model/Menu')
const {queryList}    =     require('../../servers/menu')
module.exports = async cxt => {
  //获取GET参数
  const options = cxt.request.query
  const httpData = await queryList(options,Menu)
  // console.log(httpData)
  cxt.body = httpData
}