//引入Koa模块
const Koa             =     require('koa')
const jwtKoa          =     require('koa-jwt')
const staticKoa       =     require('koa-static')
const bodyParser      =     require('koa-bodyparser')
const koaSwagger      =     require('koa2-swagger-ui')

//引入数据库
const mongoose        =     require('mongoose')

//引入配置文件
const router          =     require('./config/routerConfig')
const swagger         =     require('./config/swaggerConfig')
const {host,port}     =     require('./config/serviceConfig')
const ConnectString   =     require('./config/mongodbConfig')
const { SECRET }      =     require('./config/constantsConfig')

//构造对象
const App = new Koa()
  
//中间件
App.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))                                     //解析请求
App.use(staticKoa('./public'))     //设置静态文件路由
App.use(router.routes())                //启动路由
   .use(router.allowedMethods())        //启动子路由
App.use(swagger.routes())               //swagger路由
   .use(swagger.allowedMethods())       //允许的方法

App.use(koaSwagger({
  routePrefix: '/swagger',              //接口文档访问地址
  swaggerOptions: {
    url: '/swagger.json',               //example path to json 其实就是之后swagger-jsdoc生成的文档地址
  }
}))

// koa实现jwt验证
App.use(jwtKoa({
  // 密匙
  secret: SECRET
}).unless({
  // 自定义忽略jwt验证的目录
  path: [
      /^\/api\/account\/login/
  ]
}))

//连接数据服务
mongoose.connect(ConnectString,{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('数据库连接成功'))
        .catch(() => console.log('数据库连接失败'));

//开启服务
App.listen(port,host,() => {
  console.log(`Server is running to ${host}:${port}`);
})


