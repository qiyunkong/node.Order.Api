
const {queryTreeMenuChild} = require('./menu')

//获取角色Tree
const queryTreeRole = async (options,Model) =>{
  //结构出树杈节点
  const {parentId} = options
  const result = await Model.find({}).sort('sortNo')
  //格式转化Tree
  const menuList= queryTreeRoleChild(parentId,result)
  return  {code:200,msg:"success",content:'获取菜单JSON成功',data:menuList}

}



//获取登录后的角色授权Tree菜单
const queryRoleMenu = async (keyInArr,Model) =>{
  //查询符合条件的
  const result  = await Model.find({path:{$in:keyInArr}}).sort('sortNo')
  //格式转化Tree  queryTreeMenuChild 转化为菜单格式
  const menuList= queryTreeMenuChild(0,result)
  //返回
  return  {code:200,msg:"success",content:'获取菜单JSON成功',data:menuList}

}


//转化为-Tree授权结构
const queryTreeRoleChild = (id,MenuList)=>{
  //获取出最外层 ‘0’ --》 开始
  let list = MenuList.filter((item)=>item.parentId == id)
  //判断长度 是否为零
  if(list.length != 0){
    //承装子元素的容器
    let children = []
    //更换键值
    MenuList = list.map(({_id,icon,name,path})=>{
      //遍历是否还有子节点
      children = queryTreeRoleChild(_id,MenuList)
      if(!icon){
        if(children.length == 0){
          return{
            title:name,
            key:path,
          }
        }else{
          return{
            title:name,
            key:path,
            children
          }
        }

      }else{
        if(children.length == 0){
          return{
            title:name,
            key:path,
          }
        }else{
          return{
            title:name,
            key:path,
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
  queryTreeRole,
  queryRoleMenu
}