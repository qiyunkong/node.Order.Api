//引入模块
const Router        =     require('koa-router')

//构造函数
const router = new Router()    
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: 获取用户信息
 *     description: 根据ID获取指定的用户信息
 *     tags:
 *       - User 用户服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 用户ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/:id', async (ctx, next) => {
    ctx.body = {name:'info齐云飞'}
})

/**
 * @swagger
 * /api/users/:
 *   get:
 *     summary: 获取用户列表
 *     description: 获取用户列表
 *     tags:
 *       - User 用户服务
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: 用户ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */

router.get('/', async (ctx, next) => {    
    ctx.body = {name:'list齐云飞'}
})


/**
 * @swagger
 * /api/users/:
 *   post:
 *     summary: 添加用户
 *     description: 添加用户
 *     tags:
 *       - User 用户服务
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
    ctx.body = {name:'add齐云飞'}
})

/**
 * @swagger
 * /api/users/id:
 *   put:
 *     summary: 更新用户
 *     description: 根据id更新指定用户信息
 *     tags:
 *       - User 用户服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 用户ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */

 router.put('/:id', async (ctx, next) => {    
    ctx.body = {name:'put齐云飞'}
})


/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: 删除用户
 *     description: 根据id删除指定用户信息
 *     tags:
 *       - User 用户服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 用户ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */

router.delete('/:id', async (ctx, next) => {    
    ctx.body = {name:'delete齐云飞'}
})


//导出模块
module.exports = router.routes();