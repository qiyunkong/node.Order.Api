//引入模块
const Router = require('koa-router')

const { postAction, getAction, deleteAction, putAction,IdAction } = require('../actions/order')

//构造函数
const router = new Router()




/**
 * @swagger
 * /api/order{id}:
 *   get:
 *     summary: 获取订单信息
 *     description: 根据ID获取指定的订单信息
 *     tags:
 *       - Order 订单服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 订单ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/:id', IdAction);

/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: 获取订单列表
 *     description: 获取订单列表
 *     tags:
 *       - Order 订单服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/', getAction)

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: 添加订单
 *     description: 添加订单
 *     tags:
 *       - Order 订单服务
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

/**
 * @swagger
 * /api/orderid:
 *   put:
 *     summary: 更新订单
 *     description: 根据id更新指定订单信息
 *     tags:
 *       - Order 订单服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 订单ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.put('/', putAction)

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     summary: 删除订单
 *     description: 根据id删除指定订单信息
 *     tags:
 *       - Order 订单服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 订单ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.delete('/', deleteAction)

//导出模块
module.exports = router.routes();