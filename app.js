//引入Koa模块
const Koa = require('koa');
const Router = new require('koa-router')
const swagger = require('./swagger')  // 存放swagger.js的位置，可以自行配置，我放在了根目录
const koaSwagger = require('koa2-swagger-ui')

//构造对象
const app = new Koa();
const router = new Router();

//中间件
//app.use(bodyParser());
app.use(router.routes());
// 接口文档配置
app.use(swagger.routes(), swagger.allowedMethods())
app.use(koaSwagger({
    routePrefix: '/swagger', // 接口文档访问地址
    swaggerOptions: {
      url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    }
}))

// 获取博客列表
/**
 * @swagger
 * /api/blog/list:
 *   get:
 *     summary: 获取博客列表
 *     description: 获取博客列表
 *     tags:
 *       - blogs
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
 router.get('/api/blog/list', async (ctx, next) => {
    const query = ctx.query
    let author = query.author || ''
    const keyword = query.keyword || ''
    
    ctx.body = {name:"齐云飞"}
})

app.listen(3000, () => {
    console.log('Server is running to 3000')
})


