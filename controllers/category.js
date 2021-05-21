//引入模块
const Router        =     require('koa-router')

const {
        postCategory,
        getList
    }               = require('../actions/category')

//构造函数
const router = new Router()

// 定义模型 可以公用 schema $ref
/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */


/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: 获取分类信息
 *     description: 根据ID获取指定的分类信息
 *     tags:
 *       - Category 分类服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 分类ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/:id', async (ctx, next) => {
    ctx.body = {name:'info分类接口API'}
})

/**
 * @swagger
 * /api/category/:
 *   get:
 *     summary: 获取分类列表
 *     description: 获取分类列表
 *     tags:
 *       - Category 分类服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/', getList)

/**
 * @swagger
 * /api/category/:
 *   post:
 *     summary: 添加分类
 *     description: 添加分类
 *     tags:
 *       - Category 分类服务
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
router.post('/', postCategory)

/**
 * @swagger
 * /api/category/id:
 *   put:
 *     summary: 更新分类
 *     description: 根据id更新指定分类信息
 *     tags:
 *       - Category 分类服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 分类ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.put('/:id', async (ctx, next) => {
    ctx.body = {name:'put分类接口API'}
})

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: 删除分类
 *     description: 根据id删除指定分类信息
 *     tags:
 *       - Category 分类服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 分类ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.delete('/', async (ctx, next) => {
    console.log(ctx.request.query);
    const {id} = ctx.request.query
    const idType = typeof id
    switch (idType) {
        case "string":

            break
        case "object":
            //验证
            validateListId(id)
            //执行删除

            //返回
            console.log("string")
            break
        default:
            break
    }

    ctx.body = {name:'delete分类接口API'}
})


//导出模块
module.exports = router.routes();