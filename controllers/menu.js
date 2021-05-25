//引入模块
const Router = require('koa-router')

//构造函数
const  router = new Router()

//菜单
const adminMenu = [
    {
        path: '/',
        name: '系统首页',
        icon: 'HomeOutlined',
    },
    {
        name: '业务管理',
        icon: 'ShopOutlined',
        children: [
            {
                path: '/server/order',
                name: '订单管理',
            },
            {
                path: '/server/product',
                name: '商品管理',
            },
            {
                path: '/server/like',
                name: '点赞管理',
            },
            {
                path: '/server/equipment',
                name: '设备管理',
            },
        ],
    },
    {
        name: '组织架构',
        icon: 'ApartmentOutlined',
        children: [
            {
                path: '/organization/user',
                name: '用户管理',
            },
            {
                path: '/organization/category',
                name: '分类管理',
            },
            {
                path: '/organization/role',
                name: '角色管理',
            },
            {
                path: '/organization/tag',
                name: '标签管理',
            },
        ],
    },
    {
        name: '系统管理',
        icon: 'SettingFilled',
        children: [
            {
                path: '/system/setting',
                name: '系统配置',
            },
            {
                path: '/system/log',
                name: '系统日志',
            },
            {
                path: '/system/empower',
                name: '授权配置',
            },
            {
                path: '/system/menu',
                name: '菜单配置',
            },
            {
                path: '/system/notice',
                name: '轮播配置',
            },
        ],
    },
    {
        name: '模型管理',
        icon: 'SettingFilled',
        children: [
            {
                path: '/model/list',
                name: '模型列表',
            },
            {
                path: '/model/add',
                name: '模型添加',
            },
        ],
    },
    {
        name: '数据统计',
        icon: 'dashboard',
        children: [
            {
                path: '/echarts/line',
                name: '折线展示',
            },
            {
                path: '/echarts/pie',
                name: '饼形展示',
            },
            {
                path: '/echarts/bar',
                name: '柱形展示',
            },
        ],
    },
];


//发送菜单
router.get('/',async cxt =>{
    cxt.body = adminMenu;
})


//导出模块
module.exports = router.routes();