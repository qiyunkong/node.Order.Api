//导入模块
const Setting              =     require('../../model/Setting')

//导出模块
module.exports = async cxt => {

  //取出插入最新的数据
  const result = await Setting.find({}).sort({_id:-1}).limit(1)
  //响应
  cxt.body =  { code:200, msg:"success", content:'查询成功',data:result[0] }
};