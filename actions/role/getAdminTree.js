//菜单模型、角色模型
const Menu               =     require('../../model/Menu')
const Role               =     require('../../model/Role')
const {queryId}          =     require('../../servers/base')
const {queryRoleMenu}    =     require('../../servers/role')
const {queryTreeMenu}           =      require('../../servers/menu')
module.exports = async cxt => {
  //获取GET参数
  const options = cxt.request.query
  //短路算法
  options.roleId || (options.roleId='0')
  let httpData = {};
  if(options.roleId == '0'){ //如果是超级管理员
     httpData = await queryTreeMenu({parentId:0},Menu)
  }else{
    //获取角色信息
    const {data} = await queryId(options.roleId,Role)
    httpData = await queryRoleMenu(data.menus,Menu)
  }
  cxt.response.status = httpData.code
  cxt.body = httpData.data
}