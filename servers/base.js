const path              =     require('path')
const {promisify}       =     require('util')
const unlink = promisify(fs.unlink);



//异步 单删除操作  Deleted  0 展示  1 删除 这个状态的改变要关联的外键进行删除
const deleteId = async (id,Model) => {
    let result = await Model.findByIdAndDelete(id);
    //如果缩略图存在
    if(result.avatar){
        //删除缩略图
        await unlink(path.join(__dirname,'../','../','public',result.avatar))
    }
    return { code:204, msg:"success", content:"删除成功",data:result}
}

//异步 添加操作
const addModel = async (data,Module) =>{
    //创建分类
    let module = new Module(data)
    //保存分类
    const result = await module.save()
    return  {code:201,msg:"success",content:'创建分类成功',data:result}
}

//更新 操作
const updateId = async (data,Module) =>{
    let result = await Module.findByIdAndUpdate(data._id,{$set:data}, {new: true, fields: '-password'})
    return  {code:201,msg:"success",data:result}
}


//异步 查找  搜索search  串行接口的好处 大大减少服务器的发送数据的压力,请求的次数可能是增多也可能是减少
const queryList = async (options,Module) => {
    // 查询用户信息
    const result = await Module.find(...(options || {})).sort('-createTime')
    return  {code:200,msg:"success",content:'获取用户列表成功',data:result}

}




//异步 多条删除操作
const deleteList = async (list,Model) => {
    //存在删除后的数据
    const result = []
    for(const item of list){
        //删除用户
        let result = await Model.findByIdAndDelete(item)
        // 将删除的用户存储在数组中
        result.push(result);
    }
    return { code:204, msg:"success", content:"删除成功",data:result}

}


//多条 多条更新操作
const updateList = async (list,Module) =>{
    const result= null;
    return { code:204, msg:"success", content:"删除成功",data:result}
}


//异步  多条添加操作
const addList = async (list,Module) =>{
    const result =null;
    return { code:204, msg:"success", content:"删除成功",data:result}
}

//异步

model.exports = {
    addModel,
    deleteId,
    updateId,
    addList,
    queryList,
    updateList,
    deleteList,
}