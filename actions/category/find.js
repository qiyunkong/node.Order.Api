//用户模块
const Category       =     require('../../model/Category')
const {queryList}    =   require('../.././servers/base')
module.exports = async ctx => {
    //获取参数
    const options = ctx.request.query
    console.log(options)
    const body = await queryList(options,Category)
    ctx.body = body
}