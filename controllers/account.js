//引入模块
const Router                =     require('koa-router')
const {login}               =     require('../actions/account')
const {currentUser}         =     require('../actions/user')
//构造函数
const router = new Router()

/**
 * @swagger
 * /api/account/login:
 *   post:
 *     summary: 账号登录
 *     description: 账号登录
 *     tags: [Account 账号服务]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: 账号.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: 账号密码.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: 登入成功
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:  
 *                  type: string
 *                  description: 返回code码
 *                msg:   
 *                  type: string  
 *                  description: 返回信息
 *                data:
 *                  type: object
 *                  description: 返回数据
 *            example:    
 *              username: "string"
 *              password: "string"
 *   
 */
router.post('/login', login)

/**
 * @swagger
 * /api/account/register:
 *   post:
 *     summary: 账号注册
 *     description: 账号注册
 *     tags: [Account 账号服务]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: 账号.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: 账号密码.
 *         in: formData
 *         required: true
 *         type: string
 *     requestBody:   
 *          required: true  
 *          content:
 *             - application/json:
 *                  schema:    
 *                      type: object   
 *                      properties:
 *                          username:
 *                                  type: string   
 *                                  description: 用户名    
 *                          password:
 *                                  type: string   
 *                                  description: 密码    
 *                  example:        #请求参数样例。
 *                      username: "string"
 *                      password: "string"
 *     responses:
 *       200:
 *         description: 注册成功
 *   
 */
router.post('/register', async (ctx, next) => {
    ctx.body = {name:'register齐云飞'}
})

/**
 * @swagger
 * /api/account/logout:
 *   get:
 *     summary: 账号登出
 *     description: 账号登出
 *     tags:
 *       - Account 账号服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.del('/logout', async (ctx, next) => {
    ctx.body = {name:'logout齐云飞'}
})

/**
 * @swagger
 * /api/account/restPwd:
 *   put:
 *     summary: 密码重置
 *     description: 密码重置
 *     tags:
 *       - Account 账号服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.put('/restPwd',async (ctx,next)=>{
  ctx.body = {name:'restPwd齐云飞'}

})

/**
 * @swagger
 * /api/account/currentUser:
 *   get:
 *     summary: 获取当前登录的用户
 *     description: 获取当前登录的用户
 *     tags:
 *       - Account 账号服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/currentUser',currentUser )

//导出模块
module.exports = router.routes();














