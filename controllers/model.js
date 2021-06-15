//引入模块
const Router                =     require('koa-router')
//引入机甲模块
const {postDvaAction}       =     require('../actions/model/dva')
//引入机甲模型
const ModelDva              =     require('../model/ModelDva')
const HttpData              =     require('../config/httpConfig')




//引入数据库
const mongoose = require('mongoose')
const {Schema} = mongoose


//构造函数
const router = new Router()



/** 模型数据 API 查询*/
router.get('/:model',async (cxt)=>{
    //获取数据模型名称别名
    const model = cxt.params['model'];
    //验证模型名称是否正确
    const ModelDvaList = await ModelDva.where({name:model})
    //
    if(ModelDvaList.length == 0){
        cxt.body = new HttpData(401,"error","模型名称不对",ModelDvaList)
    }else{
        //查询
        const data =  await mongoose.models[model].find({})
        const {columnsForm,columnsTable,schemaDva} = ModelDvaList[0]
        cxt.body = {
            columnsForm:columnsForm,
            columnsTable:columnsTable,
            data:data,
        }
    }
});



/** 模型数据 API 添加 */
router.post('/:model',async (cxt)=>{
    //添加数据
    const model = cxt.params['model']
    //获取POST参数
    const body = cxt.request.body
    const data = await mongoose.models[model].create(body)
    cxt.body = {data}

})

router.del('/:model',async ()=>{

})

router.put('/:model',async ()=>{

})













/** 模型机甲 API */

//获取模型集合
router.get('/',async  (cxt)=>{

    // const TestSchema = new Schema({
    //     //分类名称
    //     name:{
    //         type:String,
    //         required: true,
    //     },
    // })
    //
    // //建立测试集合类
    // const Test = await mongoose.model('Test',TestSchema);
    //
    // cxt.body = {data:"创建成功"}

})

//创建模型
router.post('/', postDvaAction)

//修改模型
router.put('/',async ()=>{

})

//删除模型
router.delete('/',async  ()=>{

})


/** 模型机甲API */

//获取模型表单
router.get('/:model/form',async (cxt)=>{
    //添加数据
    const model = cxt.params['model'];
    const result = ModelDva.where({name:model}).select("schemaDva")
    cxt.body = result;
})




module.exports = router.routes()




//获取数据模型名称 别名
//const model = cxt.params['model'];
//服务停止后模型就消失了
//开启服务前需要把模型表的在次创建一次 初始化模型表的所有模型 全部存放在内存中
//首先效验是否正确的模型概念
//查询模型是否已存在
//返回模型数据表信息
//创建
//配置用户表的数据格式
//建立测试集合类
// const Test = mongoose.model('Test',TestSchema);
//await mongoose.models[model].create({name:"V1 自动化成功",age:'2021/6/14'})
//查询
//const data =  await mongoose.models[model].find({})
//console.log(data);

//删除

//创建