//导入模块
const ModelDva              =     require('../../../model/ModelDva')
const {addModel}            =     require('../../../servers/base')
//引入数据库
const mongoose            =       require('mongoose')
const {Schema}            =       mongoose



//暴露模块
module.exports = async cxt => {
  //获取POST参数
  const body = cxt.request.body
  //结构数据
  const {name,dva,nameDva} = body;

  //model 模型结构
  const _schemaDva = DvaModel(dva)
  //table 表格结构
  const columnsTable = DvaTable(dva)
  //from 表单结构
  const columnsForm =  DvaForm(dva)

  //声明机甲类型
  const modelDva = {
    name,
    nameDva,
    schemaDva:[_schemaDva],
    columnsTable,
    columnsForm,
  }
  //保存机甲类型
  const httpData =  await addModel(modelDva,ModelDva)
  //通过机甲构建
  const DvaSchema = new Schema(_schemaDva)
  //生成集合模型
  const Test = await mongoose.model(name,DvaSchema)
  cxt.response.status = httpData.code
  cxt.body = httpData

}


//Dva机甲数据库模型类型
const DvaModel = (data)=>{
  let dvaObj = {}
  data.forEach(({dataIndex,required,type})=>{
    dvaObj[dataIndex] = {
      required,
      type,
    }
  })
  return dvaObj;
}



//Dva机甲表格结构转化
const DvaTable = (data)=>{
  data = data.map(({dataIndex,title,valueType,decs})=>{
    if(!valueType){
      return {
        title,    //表头
        dataIndex, //对应字段
        tip:decs,  //提示
      }
    }else{
      return {
        title,    //表头
        dataIndex, //对应字段
        tip:decs,  //提示
        valueType,  //类型
      }
    }
  })
  return data;
}


//Dva机甲表单
const DvaForm= (data)=>{
  data = data.map(({dataIndex,title,valueType,decs})=>{
    if(!valueType) {
      return {
        title,    //表头
        dataIndex, //对应字段
        tip: decs,  //提示
      }
    }else {
      return {
        title,    //表头
        dataIndex, //对应字段
        tip: decs,  //提示
        valueType,  //类型
      }
    }
  })
  return data;
}

