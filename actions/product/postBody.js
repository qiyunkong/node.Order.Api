//导入模块
const Product              =     require('../../model/Product')
const {addModel}            =     require('../../servers/base')
//暴露模块  
module.exports = async cxt => {
    let httpData
    //获取POST参数
    const body = cxt.request.body
    httpData = await addModel(body,Product)
    cxt.response.status = httpData.code
    //响应
    cxt.body = httpData

}

