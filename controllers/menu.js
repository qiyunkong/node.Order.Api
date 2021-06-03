//引入模块
const Router = require('koa-router')
const {adminMenu} = require('../config/modelInItConfig')
const {postAction,getAction} = require('../actions/menu')
//构造函数
const  router = new Router()

//菜单


//发送菜单
router.get('/dev',async cxt =>{

    cxt.body = adminMenu;
})

//创建菜单
router.post('/',postAction)

router.get('/',getAction)

//导出模块
module.exports = router.routes();