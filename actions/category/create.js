//导入模块
const Category              =     require('../../model/Category')
const {validateCategory}    =     require('../../check/category')
const {addModel}            =     require('../../servers/base')
//暴露模块  
module.exports = async ctx => {
    //httpData
    let httpData;
    //获取POST参数
    const data = ctx.request.body
    //数据格式校验
    const { error } = validateCategory(data)
    //格式不符合要求
    if(error){
        httpData = {code:422,msg:"error",content: error.message}
    }else{
        httpData = addModel(data,Category);
    }
    //响应
    ctx.response.status = httpData.code
    ctx.body = httpData

}

