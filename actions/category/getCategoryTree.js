//菜单模型、角色模型
const Category              =     require('../../model/Category')
const {queryProductCategory}=     require('../../servers/category')
module.exports = async cxt => {
  //获取GET参数
  const {keyInArr} = cxt.request.query
  // console.log(keyInArr,cxt.request.query.keyInArr)
  let httpData = await queryProductCategory(keyInArr,Category)
  cxt.response.status = httpData.code
  cxt.body = httpData.data
}