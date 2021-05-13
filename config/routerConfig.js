//引入模块
const Router        =     require('koa-router')
const tags          =     require('../controllers/tag')
const users         =     require('../controllers/user')
const account       =     require('../controllers/account')

//构造函数
const router = new Router();

//路由嵌套
router.prefix('/api');

//开启子路由路由
router.use('/tags',tags)
router.use('/users',users)
router.use('/account',account)

//导出模块
module.exports = router;