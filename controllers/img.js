//引入模块
const Router = require('koa-router')
const multer = require('koa-multer')
const {postImg} = require('../actions/img')
//构造函数
const  router = new Router()


//配置
let storage = multer.diskStorage({
    //图片保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/img')
    },
    //修改图片名称
    filename: function (req, file, cb) {
        console.log(file);
        //file 是文件                          // java.png --> [java,png] 长度为2 2-1是png 后缀名
        let fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
let upload = multer({ storage: storage })

//上传图片
router.post('/upload',upload.single('image'),postImg)

//刪除图片
router.delete('/',async ()=>{
    console.log("调用成功")
})

//导出模块
module.exports = router.routes();