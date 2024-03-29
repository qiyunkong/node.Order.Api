//引入模块
const Router                =     require('koa-router')
const {login,getCurrent}    =     require('../actions/account')
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
 *     example-value:
 *     responses:
 *       200:
 *         description: 登入成功
 *         schema:
 *          type:object
 *          $ref:'#/definitions/Login'
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
router.post('/register', async (cxt, next) => {
    cxt.body = {name:'register齐云飞'}
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
router.del('/logout', async (cxt, next) => {
    cxt.body = {name:'logout齐云飞'}
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
router.put('/restPwd',async (cxt,next)=>{
  cxt.body = {name:'restPwd齐云飞'}

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
router.get('/currentUser',getCurrent)

//导出模块
module.exports = router.routes();














