//引入模块
const Router = require('koa-router')
const {adminMenu} = require('../config/modelInItConfig')
const {postAction,getAction,putAction} = require('../actions/menu')
//构造函数
const  router = new Router()

//菜单


//发送菜单
router.get('/dev',async cxt =>{

    cxt.body = adminMenu;
})


//修改
router.put('/',putAction)


//创建菜单
router.post('/',postAction)

//获取菜单
router.get('/',getAction)

//导出模块
module.exports = router.routes();