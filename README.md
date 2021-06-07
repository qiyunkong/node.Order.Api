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
> 学习：https://www.itying.com/koa/article-index-id-59.html
>
> 阿里百秀：C:\Windows\System32\cmd.exe
>
> 

## 项目编译器

WebStorm

ctrl+shift+r:批量替换

ctrl+shift+g+f可以批量查找

ctrl + f 查找

ctrl + r 替换

代码对折

Ctrl + Shift +  “+”  

Ctrl + Shift +  “-”

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
8. 字段验证模块安装 `npm install joi --save`
9. moongdb 关联数据库 <a href="https://blog.csdn.net/qq_44706619/article/details/105159417">解决方法</a>
10. node koa 日志管理 <a href="https://www.cnblogs.com/chunshan-blog/p/12632141.html">解决方法1</a>  <a href="https://www.cnblogs.com/thatme/p/10162274.html"> 解决方法2</a>  <a href="https://www.jianshu.com/p/997f9d28b52a">解决方法3</a> <a href="https://blog.csdn.net/weixin_34418883/article/details/88667817">解决方案4</a>  <a href="https://blog.csdn.net/weixin_34007906/article/details/86258160">解决方案5</a>
11. node 微信支付沙箱环境 <a href="https://www.bilibili.com/video/BV1mE411w73k?from=search&seid=148752033936495432">解决方法1</a>  
12. 小程序 获取当前平台版本，设备信息  <a href="">解决方案</a> `wx.getSystemInfo`
13. 上线部署 关于pm2 相关指令  <a href="https://segmentfault.com/a/1190000018756149">学习方案</a>
14. Settings 修改Tools/SHH Terminal 修改：Default encoding:UTF-8
15. Liunx "如何删除vi编辑产生的.swp文件"  <a href="https://zhidao.baidu.com/question/2142620340447203268.html">解决方案</a>
16. node.js koa 上线时 sawgger 文档会出现 请求调试出现问题， `解决方案：把sawgger配置的host 修改为上线[域名|ip]`
17. 知识扩充 <a href="https://blog.csdn.net/qq_40188459/article/details/113772660">学习方案</a>
18. node.js koa2 sawgger 注释写法 POST请求调试情况,sawgger版本，koa版本不同需要区别对待 <a href="https://blog.csdn.net/weixin_44420276/article/details/106342109"> 学习方案</a>
19. code 多行注释问题  无法对折
20. node koa 过滤器模块
21. koa 请求处理 [koa里如何设置统一的返回状态码？](https://segmentfault.com/q/1010000015934061) `cxt.status = 400 设置http请求状态`  <a href="https://www.jianshu.com/p/0bbe8afad24d">学习方案</a>
22. 字段段的验证 正则字符串转化的
23. MongoDB中的deleteOne()和findOneAndDelete()操作之间有什么区别？<a href="https://www.nhooo.com/note/qa0g2x.html">学习方案</a>
24. 修改ip时ip类型为字符串，
25. koa 设置 cookie  session  <a href="https://www.jianshu.com/p/8f4cc45d712e">解决方案</a>
26. node 多条件分页服务
27. pick 函数作用 <a href="https://www.lodashjs.com/docs/lodash.pick">学习方案</a>
28. node 模块警告问题
29. 正则表达式的学习 <a href="http://c.runoob.com/front-end/854">学习方案</a>
30. node + swagger 定义模型注释  [学习方案](https://blog.csdn.net/weixin_44420276/article/details/106342109) [学习方案2](https://www.jianshu.com/p/fb6ac11e7745) [学习方案3](https://blog.csdn.net/qq_38734862/article/details/107715579)
31. 单点登录 jwt  [学习方案](https://blog.csdn.net/Brannua/article/details/105450205)  什么jwt[学习方案](https://www.jianshu.com/p/576dbf44b2ae)
32. GET 多条件模糊参数 GET 路由参数 [学习方案](https://blog.csdn.net/qq_38694034/article/details/105247667)
33. 假删除状态需要在后端统一设置，前端参数不需要参数，只发前端正常状态的数据
34. mongoose时间范围搜索 不然搜索会有报错现象500  [学生案例](https://blog.csdn.net/m0_37857819/article/details/106559709)
35. mongoose 链式查询 条件嵌套 [学习案例](https://blog.csdn.net/Momo_Joanne/article/details/105042498) **[语法参考](https://segmentfault.com/a/1190000021010300?utm_source=tag-newest)** [参考案例](https://blog.csdn.net/weixin_34010949/article/details/88750591)
36. 分类ID查询有BUG
37. _V 字段 (mongoose)[https://www.cnblogs.com/toward-the-sun/p/6365782.html]
38. 控制器优化action 通过继承来简化共同方法



​	<del>划线</del>

## 数据库实体搭建 

组织架构

- 用户表
- 角色表
- 标签表
- 分类表

系统管理

- 配置表
- 日志表
- 授权表
- 公告表
- 轮播表

业务管理

- 订单表
- 设备表
- 商品表
- 评论表



后台代码统一格式：

```js
{
    code:401 || 200,   							//状态码
    msg:"error" || "success",					//提示类型
    content:'邮箱地址或者密码错误'				//提示内容
    data:[] || {} || String || Number 			//返回数据			 	
}
```

pick - 案例

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
_.pick(object, ['a', 'c']);
// result => { 'a': 1, 'c': 3 }

```

token 采坑存储必须是JSON  [参考案例](https://blog.csdn.net/weixin_30740581/article/details/99433113)

```js
//设置加密 token
let token = null
console.log(user);
//let json = data.toJSON()
token = jwt.sign(user.toJSON(), SECRET, { expiresIn:60 })
```

mongoose多条件模糊查询 [参考案例](https://www.cnblogs.com/coolslider/p/7832083.html)  [参考案例](https://ld246.com/article/1576166614334)



## 数据库连接

```
mongod  --dbpath 路径 --port 27018
```

 

自动化Model数据思想

1. 前端页面表单提交模型结构
2. 后端处理模型JSON数据
3. 数据库表创建
4. 访问数据模型页面   /app/:model
5. 后台

















项目启动警告问题

```js
(node:724) Warning: Accessing non-existent property 'count' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:724) Warning: Accessing non-existent property 'findOne' of module exports inside circular dependency
(node:724) Warning: Accessing non-existent property 'remove' of module exports inside circular dependency
(node:724) Warning: Accessing non-existent property 'updateOne' of module exports inside circular dependency

```




# Ant Design Pro 蚂蚁设计专业版

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

这个项目是用[Ant Design Pro]初始化的(https://pro.ant.design). 下面是如何使用的快速指南。

## Environment Prepare 环境准备

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts 提供的脚本

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

Ant Design Pro提供了一些有用的脚本，帮助您快速启动和构建web项目、代码样式检查和测试。

“package.json”中提供的脚本。可以安全地修改或添加其他脚本：

### Start project 启动项目

```bash
npm start
```

### Build project  打包项目

```bash
npm run build
```

### Check code style 检查代码样式

```bash
npm run lint
```

You can also use script to auto fix some lint error:

也可以使用脚本自动修复某些lint错误：

```bash
npm run lint:fix
```

### Test code 测试代码

```bash
npm test
```

## More 更多

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

您可以在我们的[官方网站]上查看完整文档(https://pro.ant.design). 欢迎您在我们的[github]中提供任何反馈(https://github.com/ant-design/ant-design-pro).

## 项目需求

1. 前端路由规划,页面规划，

2. 修改主题，改为配置，修改颜色  `/config/defaultSetting.ts 配置主题` 配置学习

3. 根据服务端发来渲染菜单，json配置菜单数量结构

4. ant design Pro 去掉国际化  `cinfig/config.ts 配置locale ` <a href="https://umijs.org/zh-CN/plugins/plugin-layout ">学习配置 </a>

5. 修改登录页面，删除不需要的配置和页面

6. 路由分文件，前端路由注册，路由权限访问设置，后端发送json数据结构路由渲染菜单，` 学习access`  <a href="https://www.cnblogs.com/zhubangchao/p/10245066.html">解决方案</a>

7. 

   

## 路由编写



```
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#13C2C2',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '干饭魂平台',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  menu: {
    locale: false
  },
  headerHeight: 48
};
```



1.
