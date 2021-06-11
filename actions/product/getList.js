//用户模块
const Product       =     require('../../model/Product')
const {queryList}    =     require('../.././servers/base')
module.exports = async cxt => {
    //获取参数
    const options = cxt.request.query
    const httpData = await queryList(options,Product)
    cxt.body = httpData
}