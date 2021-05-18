

module.exports = async ctx => {
    if(ctx.cookies.get("userInfo")){
        ctx.body = {
            code:200,
            msg:"success",
            content:'已登录',
            data:ctx.cookies.get("userInfo")
        };
        return
    }
    ctx.response.status = 401
    ctx.body =  {code:401,msg:"success",content:'请先登录',data: {isLogin: false}}
}