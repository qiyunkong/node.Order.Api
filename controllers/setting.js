const Router = require('koa-router')
const {getAction,postAction} = require('../actions/setting')

//构造函数
const router = new Router()

//取出最新的更新的日期配置
router.get('/',getAction)

//添加配置
router.post('/',postAction)


module.exports = router.routes()