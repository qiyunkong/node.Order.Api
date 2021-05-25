//导入模块
const Category              =     require('../../model/Category')
const {validateId}      =     require('../../check/public/index')

//导出模块
module.exports = async ctx => {
    // 获取用户id params动态参数 URL
    const id = ctx.params['id'];
    // 数据格式校验
    const {error} = validateId(id);
    //格式不符合要求
    if(error) {
        ctx.response.status = 406
        ctx.body = { code:406, msg:"error", content: error.message }
        return
    }
    //格式符合要求 继续向下执行
    // 查询用户信息
    const Category = await Category.findById(id).select('-password');
    //响应
    ctx.body =  { code:200, msg:"success", content:'查询成功',data:Category }
};