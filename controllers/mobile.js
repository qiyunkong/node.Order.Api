//引入模块
const Router        =     require('koa-router')
const Order         =     require('../model/Order')
const Product       =     require('../model/Product')
const Category      =     require('../model/Category')
const {addModule}   =     require('../servers/base')
const { postAction, getAction, deleteAction, putAction,IdAction } = require('../actions/tag')
//构造函数
const router = new Router()


router.get('/product',async (cxt)=>{
  //获取参数
  const {categoryId} = cxt.request.query

  //categoryId 把字符串转化为数组
  const categoryArr =  JSON.parse(categoryId);
  const id =  categoryArr[0];
  //分类数据
  const categoryData = await Category.find({parentId:id})
  //商品数据
  const productData  = await Product.find({categoryId:{$in:categoryArr}})
  //遍历小程序数据格式
  const data = categoryData.map(({_id,name})=>{
    const foods =  productData.filter((item)=>{
      return  item.categoryId.includes(_id)
    })
    return {
      name,
      foods,
    }
  })

  //格式转化
  cxt.body = {
    categoryData,
    productData,
    data
  }






})

router.post('/order', async (cxt)=>{
  let httpData
  //获取POST参数
  const body = cxt.request.body
  httpData = await addModel(body,Order)
  cxt.response.status = httpData.code
  //响应
  cxt.body = httpData


})

router.put('/',putAction)

router.delete('/', deleteAction)

//router.get('/:id',IdAction)


//导出模块
module.exports = router.routes();