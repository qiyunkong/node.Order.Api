//菜单列表
const queryList = async (options,Model) => {
  // 结构子类节点
  const {parentId} = options
  const result = await Model.where({parentId:parentId.toString()}).find({}).sort('-createTime')
  //返回前端数据
  return  {code:200,msg:"success",content:'获取菜单列表成功',data:result}
}

//菜单JSON
const queryJson = async (options,Model) =>{
  //结构子类节点
  const {parentId} = options
  const result = await Model.find({}).sort('sortNo')
  const menuList= queryChild(parentId,result);
  return  {code:200,msg:"success",content:'获取菜单JSON成功',data:menuList}

}

//子菜单Menu
const queryChild = (id,MenuList)=>{
  //获取出最外层 ‘0’ --》
  let list = MenuList.filter((item)=>item.parentId == id)
  //判断长度 是否为零
  if(list.length != 0){
    //承装子元素的容器
    let children = []
    MenuList = list.map(({_id,icon,name,path})=>{
      //遍历是否还有子节点
      children = queryChild(_id,MenuList)
      if(!icon){
        if(children.length == 0){
          return{
            name,
            path,
          }
        }else{
          return{
            name,
            path,
            children
          }
        }

      }else{
        if(children.length == 0){
          return{
            icon,
            name,
            path,
          }
        }else{
          return{
            icon,
            name,
            path,
            children
          }
        }
      }
    })
    return MenuList
  }
  return []
}


module.exports = {
  queryList,
  queryJson,
}