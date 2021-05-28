module.exports = async cxt => {
    const {filename} = cxt.req.file; //获取图片的名字
    cxt.body = {
        code:200,
        msg:"error",
        content:"上传成功",
        data:{
            name:filename,
            url:`/uploads/img/${filename}`
        }
    }

}