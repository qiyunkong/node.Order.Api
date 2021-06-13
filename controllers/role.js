//引入模块
const Router   =    require('koa-router')

const { postAction, getAction, deleteAction, putAction,IdAction,getTree,getAdminTree } = require('../actions/role')


//构造函数
const router = new Router()


/**
 * @swagger
 * /api/role:
 *   get:
 *     summary: 获取角色列表
 *     description: 获取角色列表
 *     tags:
 *       - Role 角色服务
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/', getAction)

router.get('/tree/data',getTree)

router.get('/tree/admin',getAdminTree)


/**
 * @swagger
 * /api/role:
 *   post:
 *     summary: 添加角色
 *     description: 添加角色
 *     tags:
 *       - Role 角色服务
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
 * /api/role:
 *   put:
 *     summary: 更新角色
 *     description: 根据id更新指定角色信息
 *     tags:
 *       - Role 角色服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 角色ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.put('/', putAction)

/**
 * @swagger
 * /api/role:
 *   delete:
 *     summary: 删除角色
 *     description: 根据id删除指定角色信息
 *     tags:
 *       - Role 角色服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 角色ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.delete('/', deleteAction)

/**
 * @swagger
 * /api/role{id}:
 *   get:
 *     summary: 获取角色信息
 *     description: 根据ID获取指定的角色信息
 *     tags:
 *       - Role 角色服务
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 角色ID
 *         type: number
 *     responses:
 *       200:
 *         description: 成功获取
 */
router.get('/:id',IdAction)


//导出模块
module.exports = router.routes();