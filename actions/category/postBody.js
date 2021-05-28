//导入模块
const Category              =     require('../../model/Category')
const {validateCategory}    =     require('../../check/category')
const {addModel}            =     require('../../servers/base')
//暴露模块  
module.exports = async cxt => {
    let httpData
    //获取POST参数
    const data = cxt.request.body
    //数据格式校验
    const { error } = validateCategory(data)
    //格式不符合要求
    if(error){
        httpData =  {code:422,msg:"error",content: error.message}
    }else{
        httpData = await addModel(data,Category);
    }
    cxt.response.status = httpData.code
    //响应
    cxt.body = httpData

}

