//引入模块
const router            =       require('koa-router')() //引入路由函数
const swaggerJSDoc      =       require('swagger-jsdoc')
const path              =       require('path')
const {host,port}       =       require('./serviceConfig')

//配置
const swaggerDefinition = {
    info: {
        title: '干饭魂平台API',
        version: '1.0.0',
        description: 'API',
    },
    host: `${host}:${port}`,
    basePath: '/' // Base path (optional)
};

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '../controllers/*.js')], // 写有注解的router的存放地址, 最好path.join()
};

const swaggerSpec = swaggerJSDoc(options)

// 通过路由获取生成的注解文件
router.get('/swagger.json', async function (cxt) {
    cxt.set('Content-Type', 'application/json');
    cxt.body = swaggerSpec;
})

//导出模块
module.exports = router