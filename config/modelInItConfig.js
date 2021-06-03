//引入其他配置
const {host,port}   = require('../config/serviceConfig')

//初始化菜单配置
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

//用户初始化配置
const adminUser = {
  nickName: 'itAdmin',
  email: 'admin@jsfei.cn',
  password: '123456',
  role: 'admin',
  avatar: null,
  createTime: new Date,
  status: 1
}

//系统初始化配置
const adminSetting = {
  logo: '/logo/default.svg',
  title:"干饭庄平台系统",
  shortName:"干饭庄系统",
  eName: 'GFZ',
  name:"江湖干饭庄-餐饮后台管理系统-V1",
  webDesc: "我是网站的描述",
  staticSrc:`http://${host}:${port}`,
}

//系统初始化配置
module.exports = {
  adminMenu,
  adminUser,
  adminSetting,
}
