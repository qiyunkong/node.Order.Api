const jwt           =   require('jsonwebtoken')
const util          =   require('util')
const verify        =   util.promisify(jwt.verify)  // 将jwt.verify函数promise化
const { SECRET }    =   require('../../config/constantsConfig')  // 解密密码


module.exports = async ctx => {
    const token = ctx.header.authorization
    try{
        // 解密token
        const payload = await verify(token.split(' ')[1], SECRET)
        ctx.body = {
            code:200,
            msg:"success",
            content:'成功获取',
            data: payload
        }
    }catch(e){
        console.error(e)
        ctx.response.status = 401
        ctx.body = {
            code:401,
            msg:"error",
            content:'Verify token failed.',
            data: {isLogin: false}
        }
    }

}