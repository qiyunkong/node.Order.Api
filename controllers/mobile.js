//引入模块
const Router        =     require('koa-router')
const Order         =     require('../model/Order')
const Product       =     require('../model/Product')
const Category      =     require('../model/Category')
const {addModel,queryId,updateId,queryList,queryPop}   =     require('../servers/base')
const {validateId}  = require('../check/public')
const { postAction, getAction, deleteAction, putAction,IdAction } = require('../actions/tag')
//构造函数
const router = new Router()

//商品接口
router.get('/product',async (cxt)=>{
  //获取参数
  const {categoryId} = cxt.request.query

  //categoryId 把字符串转化为数组
  const categoryArr =  JSON.parse(categoryId);
  const id =  categoryArr[0];
  //分类数据
  const categoryData = await Category.where({status:true}).find({parentId:id})
  //商品数据
  const productData  = await Product.find({categoryId:{$in:categoryArr}})
  //遍历小程序数据格式
  const data = []
  categoryData.forEach(({_id,name})=>{
    const foods =  productData.filter((item)=>{
      return  item.categoryId.includes(_id)
    })
    if(foods.length != 0){
      data.push({
        name,
        foods,
      })
    }
  })

  //格式转化
  cxt.body = {
    categoryData,
    productData,
    data
  }






})


//生成订单接口
router.post('/order', async (cxt)=>{
  let httpData
  //获取POST参数
  let body = cxt.request.body
  //取出今天的栈顶元素 如果没有就从1自增
  const result =  await Order.find({}).sort({_id:-1}).limit(1)
  if(result.length == 0){
    body.orderOutNo = 1 
  }else{
    body.orderOutNo = result[0].orderOutNo + 1;
  }
  httpData = await addModel(body,Order)
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData
})

//订单详情
router.get('/order/:id',async (cxt)=>{
  // 获取用户id params动态参数 URL
  const id = cxt.params['id'];
  const httpData = await queryId(id,Order)
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData
})


//订单列表
router.get('/order',async (cxt)=>{

  const httpData = await queryList({
      current:0,
      pageSize:0
  },Order)

  //数据格式更换
  // const _data = data.map(({_id,productArray,paymentStatus,createTime})=>{
  //   return {
  //     order_id:_id,
  //     foods:productArray,
  //     taken:paymentStatus,
  //     createTime,
  //   }
  // })

  cxt.body = httpData


})



//支付接口
router.put('/order',async (cxt)=>{
  //获取POST参数
  const body = cxt.request.body
  const {_id} = body
  //验证
  const {error} = validateId(_id)
  //数据格式没有通过验证
  if(error){
    cxt.response.status = 400
    cxt.body = {code:400,msg:"error",content: error.message}
    return
  }
  //通过验证
  let httpData = await updateId(body,Order)
  //响应
  cxt.response.status = httpData.code
  cxt.body = httpData
})

router.put('/',putAction)

router.delete('/', deleteAction)

//router.get('/:id',IdAction)


//导出模块
module.exports = router.routes();