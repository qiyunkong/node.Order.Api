//菜单路由
const queryList = async (options,Model) => {
  // 结构子类节点
  const {parentId} = options
  const result = await Model.where({parentId:parentId.toString()}).find({}).sort('-createTime')
  //返回前端数据
  return  {code:200,msg:"success",content:'获取菜单列表成功',data:result}
}

module.exports = {
  queryList,
}