//引入模块
const Router                =     require('koa-router')
//引入机甲模块
const {postDvaAction}       =     require('../actions/model/dva')





//引入数据库
const mongoose = require('mongoose')
const {Schema} = mongoose


//构造函数
const router = new Router()



/** 模型数据 API */
router.get('/:model',async (cxt)=>{
    //获取数据模型名称 别名
    const model = cxt.params['model'];
    //服务停止后模型就消失了
    //开启服务前需要把模型表的在次创建一次 初始化模型表的所有模型 全部存放在内存中
    //首先效验是否正确的模型概念
    //查询模型是否已存在
    //返回模型数据表信息

    //console.log(mongoose);

    //创建
    //配置用户表的数据格式

    //建立测试集合类
   // const Test = mongoose.model('Test',TestSchema);
    await mongoose.models[model].create({name:"V1 自动化成功"})
    //查询
    const data =  await mongoose.models[model].find({})
    //console.log(data);

    //删除

    //创建

    cxt.body = {data:data}
});

router.post('/:model',async ()=>{

})

router.del('/:model',async ()=>{

})

router.put('/:model',async ()=>{

})













/** 模型机甲 API */

//获取模型集合
router.get('/',async  (cxt)=>{

    const TestSchema = new Schema({
        //分类名称
        name:{
            type:String,
            required: true,
        },
    })

    //建立测试集合类
    const Test = await mongoose.model('Test',TestSchema);

    cxt.body = {data:"创建成功"}

})

//创建模型
router.post('/', postDvaAction)

//修改模型
router.put('/',async ()=>{

})

//删除模型
router.delete('/',async  ()=>{

})





module.exports = router.routes()