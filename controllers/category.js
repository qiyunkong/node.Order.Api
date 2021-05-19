//引入模块
const Router        =     require('koa-router')

//构造函数
const router = new Router()

/**
 * @swagger
 * /api/Category/{id}:
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
 * /api/Category/:
 *   get:
 *     summary: 获取分类列表
 *     description: 获取分类列表
 *     tags:
 *       - Category 分类服务
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: 分类ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/', async (ctx, next) => {
    ctx.body = {name:'list分类接口API'}
})

/**
 * @swagger
 * /api/Category/:
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
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.post('/', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
        code:200,
        msg:"success",
        content:'请求成功',
    }
})

/**
 * @swagger
 * /api/Category/id:
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
 * /api/Category/{id}:
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
router.delete('/:id', async (ctx, next) => {
    ctx.body = {name:'delete分类接口API'}
})


//导出模块
module.exports = router.routes();