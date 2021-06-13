//菜单模块
const Menu               =     require('../../model/Menu')
const {queryTreeRole}    =    require('../.././servers/role')
module.exports = async cxt => {
  //获取GET参数
  const options = cxt.request.query
  //短路算法
  options.parentId || (options.parentId='0')
  const httpData = await queryTreeRole(options,Menu)
  console.log(httpData)
  cxt.body = httpData.data
}