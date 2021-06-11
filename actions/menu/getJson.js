//菜单模块
const Menu           =     require('../../model/Menu')
const {queryJson}    =     require('../../servers/menu')
module.exports = async cxt => {
  //获取GET参数
  const options = cxt.request.query
  //短路算法
  options.parentId || (options.parentId='0')
  const httpData = await queryJson(options,Menu)
  cxt.body = httpData.data
}