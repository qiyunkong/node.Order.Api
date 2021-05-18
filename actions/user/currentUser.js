

module.exports = async ctx => {
    if(ctx.cookies.get("userInfo")){
        ctx.body =  ctx.cookies.get("userInfo");
        return
    }
    ctx.body ={
        data: {
            isLogin: false,
        },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
    }
}