//用户模块
const User           =     require('../../model/User')
const {queryList}    =    require('../.././servers/user')
module.exports = async cxt => {
    //获取参数
    const options = cxt.request.query
    const httpData = await queryList(options,User)
    cxt.body = httpData
}