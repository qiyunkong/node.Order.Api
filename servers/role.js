const Menu  = require('../model/Model')

//权限菜单JSON
const queryJson = async (options) =>{
  //结构子类节点
  const {parentId} = options
  const result = await Menu.find({}).sort('sortNo')
  const menuList= queryChild(parentId,result)
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
  queryJson
}