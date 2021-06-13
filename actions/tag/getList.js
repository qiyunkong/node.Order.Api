//用户模块
const Tag           =     require('../../model/Tag')
const {queryList}    =    require('../.././servers/base')
module.exports = async cxt => {
    //获取参数
    const options = cxt.request.query
    const httpData = await queryList(options,Tag)
    cxt.body = httpData
}