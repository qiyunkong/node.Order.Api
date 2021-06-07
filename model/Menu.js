//引入模块
const mongoose = require('mongoose')
const {adminMenu}   = require('../config/modelInItConfig')
const { Schema } = mongoose;

const MenuSchema = new Schema({

  //菜单名称
  name:String,

  //菜单图标
  icon:{
    type:String,
    minlength:2,
    maxlength:30,
  },

  //菜单路由
  path:{
    type:String,
    required:true
  },

  //菜单别名
  alias:{
    type:String,
    required:true,
  },

  //父节点
  parentId:{
    type:String,
    required:true,
    default:'0'
  },

  //创建时间
  createTime:{
    type:Date,
    default:Date.now
  },

  //排序
  sortNo:{
    type:Number,
    default:10
  }



}, {versionKey: false})

// 系统菜单集合类
const Menu = mongoose.model('Menu', MenuSchema)

//初始化菜单
// Menu.find({}).then(async result => {
//   if (result.length == 0) {
//     adminMenu.forEach( (item)=>{
//
//       await Menu.create(item);
//     })
//     const len = adminMenu.length - 1;
//     for(let i = 0; i<len; i++){
//       if(adminMenu[i].children){
//
//       }
//       await Menu.create(item);
//     }
//     const dataResult = await Menu.create(adminMenu);
//   }
// })



// 导出对象
module.exports = Menu