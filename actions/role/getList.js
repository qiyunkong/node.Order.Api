//用户模块
const Role           =     require('../../model/Role')
const {queryList}    =    require('../.././servers/base')
module.exports = async cxt => {
    //获取参数
    const options = cxt.request.query
    const httpData = await queryList(options,Role)
    cxt.response.status = httpData.code
    cxt.body = httpData
}