//导入模块
const Menu                  =     require('../../model/Menu')
const {addModel}            =     require('../../servers/base')
//暴露模块
module.exports = async cxt => {
  //获取POST参数
  const body = cxt.request.body
  //格式不符合要求
  let httpData = await addModel(body,Menu);
  //设置状态值
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData

}

