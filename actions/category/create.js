//导入模块
const Category              =     require('../../model/Category')
const {validateCategory}    =     require('../../check/category')

//暴露模块  
module.exports = async ctx => {
    //获取POST参数
    const data = ctx.request.body
    //数据格式校验
    const { error } = validateCategory(data)
    //格式不符合要求
    if(error){
        ctx.response.status = 422
        ctx.body = {code:422,msg:"error",content: error.message}
        return
    }
    //格式符合要求 继续向下执行
    //创建分类
    let category = new Category(data)
    //保存分类
    const result = await category.save()
    //响应
    ctx.response.status = 201
    ctx.body = {code:201,msg:"success",content:'创建分类成功',data:result}

}

