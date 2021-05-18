//引入Koa模块
const Koa           =     require('koa')
const bodyParser    =     require('koa-bodyparser')
const koaSwagger    =     require('koa2-swagger-ui')

//引入数据库
const mongoose      =     require('mongoose')

//引入配置文件
const router          =     require('./config/routerConfig')
const swagger         =     require('./config/swaggerConfig')
const {host,port}     =     require('./config/serviceConfig')
const ConnectString =     require('./config/mongodbConfig')

//构造对象
const app = new Koa()
  
//中间件
app.use(bodyParser())                   //解析请求
app.use(router.routes())                //启动路由
   .use(router.allowedMethods())        //启动子路由
app.use(swagger.routes(),               //接口文档配置
swagger.allowedMethods())               //允许的方法

app.use(koaSwagger({
  routePrefix: '/swagger',              //接口文档访问地址
  swaggerOptions: {
    url: '/swagger.json',               //example path to json 其实就是之后swagger-jsdoc生成的文档地址
  }
}))


//连接数据服务
mongoose.connect(ConnectString,{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('数据库连接成功'))
        .catch(() => console.log('数据库连接失败'));

//开启服务
app.listen(port,host,() => {
  console.log(`Server is running to ${host}:${port}`);
})


