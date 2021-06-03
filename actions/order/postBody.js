//导入模块
const Order                  =     require('../../model/Order')
const {addModel}            =     require('../../servers/base')
//暴露模块
module.exports = async cxt => {
  //获取POST参数
  const body = cxt.request.body
  let httpData = await addModel(body,Order);
  //设置状态值
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData

}

