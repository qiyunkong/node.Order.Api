//引入模块
const Router        =     require('koa-router')
const userrouter    =     require('../controllers/user')

//构造函数
const router = new Router();

//路由嵌套
router.prefix('/api');

//开启用户路由
router.use('/user',userrouter)



//导出模块
module.exports = router;