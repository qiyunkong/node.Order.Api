//引入模块
const Router        =     require('koa-router')

//构造函数
const router = new Router()    
/**
 * @swagger
 * /api/user/info:
 *   get:
 *     summary: 获取博客列表
 *     description: 获取博客列表
 *     tags:
 *       - 个人信息
 *     parameters:
 *       - name: author
 *         in: query
 *         required: false
 *         description: 作者
 *         type: string
 *       - name: keyword
 *         in: query
 *         required: false
 *         description: 搜索关键字
 *         type: string
 *     responses:
 *       200:
 *         description: 成功获取
 */
 router.get('/info', async (ctx, next) => {
    const query = ctx.query
    let author = query.author || ''
    const keyword = query.keyword || ''
    
    ctx.body = {name:'齐云飞'}
})


//导出模块
module.exports = router.routes();