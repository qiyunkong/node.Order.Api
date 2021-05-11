# Node JS API

## 项目搭建

> npm install   传化依赖
>
> 新建 app.js
>
> git init  初始化仓库
>
> git ....

## 項目參考

> 语法： https://www.kancloud.cn/aibabel/koafornodejs/1812376
>
> 阿里百秀：C:\Windows\System32\cmd.exe
>
> 



1.目录分化

> 路由文件   routers
>
> 路基行动	 actions 
>
> 控制器文件 controllers
>
> 实体类文件 model
>
> 服务代码   server
>
> 配置文件	config
>
> 静态文件  public 
>
> 程序入口文件 app.js
>
> 

前台校验可以没有，但是后台效验必须有。

代码编写顺序

1. 导入模块
2. 构造对象
3. 调用模块
4. 函数编写
5. 导出模块



## 项目问题与需求

1. <del>上线需要https，因为小程序需要https 服务  需要找到koa的https,</del><a href="https://blog.csdn.net/qq_30604453/article/details/100092986">解决方法</a>
2.  跨域拦截，小程序访问，PC访问，APP访问，这个三个域名访问服务器时会跨域 <a href="https://www.cnblogs.com/lpl666/p/12881119.html"> 解决方法</a>
3. node + swagger 本地调试时必须在联网状态下进行，才可以访问API文档
4. koa 路由划分 <a href="https://blog.csdn.net/u010730897/article/details/81741355">解决方法1</a> <a href="https://www.jianshu.com/p/642956ee43f3"> 解决方法2</a>
5. koa 监听指定的ip <a href="https://segmentfault.com/q/1010000004091724">解决方法</a>
6. 现在对应指定包版本 <a href="https://www.cnblogs.com/gaowengang/p/11639871.html">解决方法</a> `npm install 包名@版本号`
7. 密码加密 bcrypt是一种不可逆的加密算法，无法通过解密密文得到明文。  `npm install bcrypt@4.0.1   --save`
8. 字段验证 `npm install joi --save`
9. moongdb 关联数据库 <a href="https://blog.csdn.net/qq_44706619/article/details/105159417">解决方法</a>
10. node koa 日志管理 <a href="https://www.cnblogs.com/chunshan-blog/p/12632141.html">解决方法1</a>  <a href="https://www.cnblogs.com/thatme/p/10162274.html"> 解决方法2</a>  <a href="https://www.jianshu.com/p/997f9d28b52a">解决方法3</a>

​	<del>划线</del>

