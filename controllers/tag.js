//引入模块
const Router        =     require('koa-router')

//构造函数
const router = new Router()

/**
 * @swagger
 * /api/tags/{id}:
 *   get:
 *     summary: 获取标签信息
 *     description: 根据ID获取指定的标签信息
 *     tags:
 *       - Tag 标签服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 标签ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/:id', async (ctx, next) => {
    ctx.body = {name:'info标签接口API'}
})

/**
 * @swagger
 * /api/tags/:
 *   get:
 *     summary: 获取标签列表
 *     description: 获取标签列表
 *     tags:
 *       - Tag 标签服务
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: 标签ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/', async (ctx, next) => {
    ctx.body = {name:'list标签接口API'}
})

/**
 * @swagger
 * /api/tags/:
 *   post:
 *     summary: 添加标签
 *     description: 添加标签
 *     tags:
 *       - Tag 标签服务
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
    ctx.body = {name:'add标签接口API'}
})

/**
 * @swagger
 * /api/tags/id:
 *   put:
 *     summary: 更新标签
 *     description: 根据id更新指定标签信息
 *     tags:
 *       - Tag 标签服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 标签ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.put('/:id', async (ctx, next) => {
    ctx.body = {name:'put标签接口API'}
})


/**
 * @swagger
 * /api/tags/{id}:
 *   delete:
 *     summary: 删除标签
 *     description: 根据id删除指定标签信息
 *     tags:
 *       - Tag 标签服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 标签ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.delete('/:id', async (ctx, next) => {
    ctx.body = {name:'delete标签接口API'}
})


//导出模块
module.exports = router.routes();