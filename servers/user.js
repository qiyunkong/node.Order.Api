const {matchOR}         =     require('./tool')
//异步 查找  搜索search  串行接口的好处 大大减少服务器的发送数据的压力,请求的次数可能是增多也可能是减少  模糊查询
const queryList = async (options,Model) => {
  // 查询用户信息
  const current  =  delete options.current
  const pageSize =  delete options.pageSize
  options = matchOR(options)
  const result = await Model.where(options).find({email:{$ne:'admin@jsfei.cn'}}).populate('roleId','name').sort('-createTime')

  //数组
  return  {code:200,msg:"success",content:'获取用户列表成功',data:formatList(result)}
}



//格式转化
const formatList = (list)=>{
  list = list.map((item)=>{
    const { avatar,status,nickName, email,
      password,
      createTime,
    } = item;
    const {name,_id} = item.roleId;
    return {
      _id:item._id,
      avatar,
      status,
      nickName,
      email,
      password,
      createTime,
      roleName:name,
      roleId:_id,
    }
  });
  return list;
}
module.exports = {
  queryList,
}