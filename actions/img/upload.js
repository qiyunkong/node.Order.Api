module.exports = async cxt => {
    const {filename} = cxt.req.file; //获取图片的名字
    cxt.body = {
        code:200,
        msg:"success",
        content:"上传成功",
        data:{
            name:filename,
            url:`/uploads/img/${filename}`
        }
    }

}