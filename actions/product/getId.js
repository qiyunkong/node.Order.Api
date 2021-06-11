//导入模块
const Product              =     require('../../model/Product')
const {validateId}          =     require('../../check/public')
const {queryId}             =     require('../../servers/base')

//导出模块
module.exports = async cxt => {
    // 获取用户id params动态参数 URL
    const id = cxt.params['id'];
    // 数据格式校验
    const {error} = validateId(id);
    //格式不符合要求
    if(error) {
        cxt.response.status = 406
        cxt.body = { code:406, msg:"error", content: error.message }
        return
    }
    //格式符合要求 继续向下执行
    // 查询用户信息
    const body = await queryId(id,Product);
    //响应
    cxt.body =  body

}