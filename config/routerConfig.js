//引入模块
const Router        =     require('koa-router')
const tags          =     require('../controllers/tag')
const users         =     require('../controllers/user')
const menus         =     require('../controllers/menu')
const accounts      =     require('../controllers/account')
const category      =     require('../controllers/category')

//构造函数
const router = new Router();

//路由嵌套
router.prefix('/api');

//开启子路由路由
router.use('/tags',tags)
router.use('/menu',menus)
router.use('/users',users)
router.use('/account',accounts)
router.use('/category',category)

//导出模块
module.exports = router;