//用户模块
const Category       =     require('../../../model/Category')
const {queryList}    =    require('../../../servers/category')
module.exports = async cxt => {
    //获取参数
    const options = cxt.request.query
    console.log(options)
    const httpData = await queryList(options,Category)
    cxt.body = httpData
}