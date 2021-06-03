//导入模块
const Setting               =     require('../../model/Setting')
const {addModel}            =     require('../../servers/base')
//暴露模块
module.exports = async cxt => {
  let httpData
  //获取POST参数
  const data = cxt.request.body
  //格式不符合要求
  httpData = await addModel(data,Setting);
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData

}