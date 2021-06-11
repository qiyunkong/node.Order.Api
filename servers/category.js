const {matchOR} = require('./tool')

//异步 查找  搜索search  串行接口的好处 大大减少服务器的发送数据的压力,请求的次数可能是增多也可能是减少  模糊查询
const queryList = async (options,Model) => {
    // 查询用户信息
    const {parentId} = options
    const current  =  delete options.current    //current 删除 删除成功为true 失败为false
    const pageSize =  delete options.pageSize   //
    delete options.parentId
    options = matchOR(options)
    let result;
    if(!parentId){
        result =  await Model.where({deleted: 1}).find(options).sort('-createTime')
    }else{
        result =  await Model.where({deleted: 1}).where({parentId:parentId.toString()}).find(options).sort('-createTime')
    }


    //数组
    return  {code:200,msg:"success",content:'获取用户列表成功',data:result}
    /*
    * 分页
    * pageSize 一页的量数 5
    * current 当前的页码
    * sumSize 总条数量300
    * 总页数 == sumSize/pageSize 前端的处理
    * 一次发多少页 === 5
    * */
}

module.exports = {
    queryList,
}