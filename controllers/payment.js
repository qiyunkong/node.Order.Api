//引入模块
const Router = require('koa-router')

const { postAction, } = require('../actions/payment')

//构造函数
const router = new Router()



/**
 * @swagger
 * /api/payment:
 *   post:
 *     summary: 订单支付
 *     description: 订单支付
 *     tags:
 *       - Payment 支付服务
 *     consumes:
 *      - "application/json"
 *     requestBody:
 *        required: true
 *        content:
 *           application/json:
 *     example-value:
 *     responses:
 *       200:
 *         description: 成功获取
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Login'
 */
router.post('/', postAction)


router.get('/',async ()=>{
  console.log("支付成功")
})


//导出模块
module.exports = router.routes();