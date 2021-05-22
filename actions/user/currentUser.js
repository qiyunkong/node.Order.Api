const jwt           =   require('jsonwebtoken')
const util          =   require('util')
const verify        =   util.promisify(jwt.verify)  // 将jwt.verify函数promise化
const { SECRET }    =   require('../../config/constantsConfig')  // 解密密码
const User      =   require('../../model/User')
const {queryId}  =    require('../../servers/base')


module.exports = async ctx => {
    const token = ctx.header.authorization
    console.log(token)
    try{
        // 解密token
        const {id} = await verify(token.split(' ')[1], SECRET)
        console.log(id,"解析tokenID");
        const body = await queryId(id,User)
        ctx.body = body
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