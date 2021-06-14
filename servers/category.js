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


//获取商品分类
const queryProductCategory = async (keyInArr,Model) =>{
    //查询符合条件的
    const result  = await Model.find({_id:{$in:keyInArr}}).sort('sortNo')
    //格式转化Tree  queryTreeMenuChild 转化为菜单格式
    const menuList = queryTreeCategoryChild(0,result)
    //返回
    return  {code:200,msg:"success",content:'获取菜单JSON成功',data:menuList}
}

//转化为-Tree分类结构
const queryTreeCategoryChild = (id,MenuList)=>{
    //获取出最外层 ‘0’ --》 开始
    let list = MenuList.filter((item)=>item.parentId == id)
    //判断长度 是否为零
    if(list.length != 0){
        //承装子元素的容器
        let children = []
        //更换键值
        MenuList = list.map(({_id,name})=>{
            //遍历是否还有子节点
            children = queryTreeCategoryChild(_id,MenuList)
            if(children.length == 0){
                return{
                    value:_id,
                    label:name,
                    isLeaf:false,
                }
            }else{
                return{
                    value:_id,
                    label:name,
                    isLeaf:true,
                    children
                }
            }
        })
        return MenuList
    }
    return []
}


module.exports = {
    queryList,
    queryProductCategory,
}