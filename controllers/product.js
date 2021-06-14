//引入模块
const Router = require('koa-router')

const { postAction, getAction, deleteAction, putAction, getProduct } = require('../actions/product')


//构造函数
const router = new Router()


/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: 获取商品信息
 *     description: 根据ID获取指定的商品信息
 *     tags:
 *       - Product 商品服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 商品ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/:id', getProduct)

/**
 * @swagger
 * /api/product/:
 *   get:
 *     summary: 获取商品列表
 *     description: 获取商品列表
 *     tags:
 *       - Product 商品服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/', getAction)

/**
 * @swagger
 * /api/product/:
 *   post:
 *     summary: 添加商品
 *     description: 添加商品
 *     tags:
 *       - Product 商品服务
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
 * /api/product/id:
 *   put:
 *     summary: 更新商品
 *     description: 根据id更新指定商品信息
 *     tags:
 *       - Product 商品服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 商品ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.put('/', putAction)

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: 删除商品
 *     description: 根据id删除指定商品信息
 *     tags:
 *       - Product 商品服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 商品ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.delete('/', deleteAction)



//导出模块
module.exports = router.routes();