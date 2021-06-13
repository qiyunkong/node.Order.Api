//导入模块
const Tag                   =     require('../../model/Tag')
const {addModel}            =     require('../../servers/base')
//暴露模块  
module.exports = async cxt => {
    let httpData
    //获取POST参数
    const body = cxt.request.body
    httpData = await addModel(body,Tag)
    cxt.response.status = httpData.code
    //响应
    cxt.body = httpData

}

