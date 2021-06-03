//导入模块
const ModelDva              =     require('../../../model/Model')
const {addModel}            =     require('../../../servers/base')
//引入数据库
const mongoose            =       require('mongoose')
const {Schema}            =       mongoose



//暴露模块
module.exports = async cxt => {


  //获取POST参数
  const body = cxt.request.body
  console.log(body)




  cxt.body = {msg:"测试"}
  return

  //机甲函数
  const DvaSchema = new Schema({
    //分类名称
    name:{
      type:String,
      required: true,
    },
  })

  //建立测试集合类
  const Test = await mongoose.model('Test',DvaSchema);



  let httpData
  httpData = await addModel(body,ModelDva)
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData

}
