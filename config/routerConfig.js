//引入模块
const Router        =     require('koa-router')

const tag           =     require('../controllers/tag')
const img           =     require('../controllers/img')
const users         =     require('../controllers/user')
const role          =     require('../controllers/role')
const menus         =     require('../controllers/menu')
const model         =     require('../controllers/model')
const order         =     require('../controllers/order')
const product       =     require('../controllers/product')
const accounts      =     require('../controllers/account')
const setting       =     require('../controllers/setting')
const category      =     require('../controllers/category')
const payment       =     require('../controllers/payment')


//构造函数
const router = new Router();

//路由嵌套
router.prefix('/api');

//开启子路由路由
router.use('/img',img)
router.use('/tag',tag)
router.use('/role',role)
router.use('/menu',menus)
router.use('/order',order)
router.use('/users',users)
router.use('/model',model)
router.use('/system',setting)
router.use('/product',product)
router.use('/account',accounts)
router.use('/category',category)
router.use('/payment',payment)

//导出模块
module.exports = router;