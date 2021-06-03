//引入模块
const Category              =       require('../../../model/Category')
const {validateId}          =           require('../../../check/public')
const {deleteId,deleteList} =          require('../../../servers/base');
const {validateListId}      =       require('../../../check/category')


module.exports = async cxt => {
    //获取参数
    const {id} = cxt.request.query
    //效验类型
    const idType = typeof id
    //console.log(idType)
    //httpData
    let httpData;
    switch (idType) {
        case "string":
            //进行效验
            const {error} = validateId(id)
            //数据格式没有通过验证
            if(error) {
                httpData = { code:406, msg:"error", content:error}
                break
            }
            //执行删除
            httpData = await deleteId(id,Category)
            break
        case "object":
            //进行效验
            const errorList =  validateListId(id)
            //数据格式没有通过验证
            if(errorList) {
                httpData = { code:406, msg:"error", content:errorList}
                break
            }
            //返回
            httpData = await deleteList(id,Category)
            break
        default:
            httpData = { code:406, msg:"error", content:'请求参数存在问题'}
            break
    }

    //返回前端数据
    cxt.response.status = httpData.code
    cxt.body = httpData
}