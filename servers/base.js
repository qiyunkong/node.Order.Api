const fs                =     require('fs')
const path              =     require('path')
const {promisify}       =     require('util')
const setKeyAndValue    =     require('./tool')
const unlink            =     promisify(fs.unlink);
const HttpData          =     require('../config/httpConfig')



//异步 单删除操作  Deleted  0 展示  1 删除 这个状态的改变要关联的外键进行删除
const deleteId = async (id,Model) => {
    let result = await Model.findByIdAndDelete(id);
    //如果缩略图存在
    if(result.avatar){
        //删除缩略图
        await unlink(path.join(__dirname,'../','../','public',result.avatar))
    }

    return  new HttpData(204,"success","删除成功",result)
}

//异步 添加操作
const addModel = async (data,Model) =>{
    //创建分类
   let model = new Model(data)
    //保存分类
    const result = await model.save()
    return new HttpData(201,"success","创建分类成功",result)
}

//更新 操作
const updateId = async (data,Model) =>{
    let result = await Model.findByIdAndUpdate(data._id,{$set:data}, {new: true, fields: '-password'})
    return  {code:201,msg:"success",data:result}
}

//查询
const queryId = async  (id,Model) =>{
    let result = await Model.findOne({_id:id})
    console.log(result,"封装的queryId方法");
    // 如果用户不存在 响应
    if (!result) {
        return new HttpData(401,"error","token格式不正确")
    }else{
        return new HttpData(200,"success","成功获取",result)
    }
    return new HttpData(401,"error","token格式不正确")
}




//异步 查找  搜索search  串行接口的好处 大大减少服务器的发送数据的压力,请求的次数可能是增多也可能是减少  模糊查询
const queryList = async (options,Model) => {
    // 查询用户信息
    //const {current,pageSize} = options
    const current  =  delete options.current
    const pageSize =  delete options.pageSize
    options = setKeyAndValue(options)
    const result = await Model.find(options).sort('-createTime')

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




//异步 多条删除操作
const deleteList = async (list,Model) => {
    //存在删除后的数据
    const result = []
    for(const item of list){
        //删除用户
        let model = await Model.findByIdAndDelete(item)
        // 将删除的用户存储在数组中
        result.push(model);
    }
    return new HttpData(204,"success","删除成功",result)

}


//多条 多条更新操作
const updateList = async () =>{
    const result= null;
    return { code:204, msg:"success", content:"删除成功",data:result}
}


//异步  多条添加操作
const addList = async () =>{
    const result =null;
    return { code:204, msg:"success", content:"删除成功",data:result}
}

//异步

module.exports = {
    queryId,
    addModel,
    deleteId,
    updateId,
    addList,
    queryList,
    updateList,
    deleteList,
}