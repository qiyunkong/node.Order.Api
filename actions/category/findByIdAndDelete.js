//引入模块
const Category              =       require('../../model/Category')
const {validateId}          =           require('../../check/public/index')
const {deleteId}            =          require('../../servers/base');
const {validateListId}      =       require('../../check/category')


module.exports = async ctx => {
    //获取参数
    const {id} = ctx.request.query
    //效验类型
    const idType = typeof id
    //httpData
    let httpData;
    switch (idType) {
        case "string":
            //效验ID
            const { error } = validateId(id)
            //数据格式没有通过验证
            if(error) {
                httpData = { code:406, msg:"error", content:error}
                break
            }
            //执行删除
            httpData = await deleteId(id,Category)
            break
        case "object":
            //验证
            const errorList =  validateListId(id)
            //执行删除
            if(errorList) {
                httpData = { code:406, msg:"error", content:errorList}
                break
            }
            //返回
            httpData = await  deleteList(id,Category)
            break
        default:
            httpData = { code:406, msg:"error", content:'请求参数存在问题'}
            break
    }

    //返回前端数据
    ctx.response.status = httpData.code
    ctx.body = httpData
}