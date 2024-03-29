//引入模块
const fs                =     require('fs')
const path              =     require('path')
const {promisify}       =     require('util')
const User              =     require('../../model/User')
const {validateId}      =     require('../../check/public/index')

const unlink = promisify(fs.unlink);

module.exports = async cxt => {
    //获取用户id
    const id =cxt.params['id']

    if(id.indexOf('-') != -1){
        //批量删除
        //将字符串id分割为数组
        const ids = id.split('-')
        //存放结果数组
        const result = []
        for(const item of ids){
            //验证
            let {error} =  validateId(item);
            //数据格式没有通过验证
            if(error) {
                cxt.response.status = 406
                cxt.body = { code:406, msg:"error", content:error}
                return
            }
        }
        //通过验证
        for(const item of ids){
            //删除用户
            let user = await User.findByIdAndDelete(item)
            //如果缩略图存在
            if(user.avatar){
                //删除缩略图
                await unlink(path.join(__dirname,'../','../','public',user.avatar))
            }
        }
        cxt.response.status = 204
        cxt.body = { code:204, msg:"success", content:"删除成功",data:result}

    }else{
        //单个删除
        //验证
        let {error} =  validateId(id)
        //数据格式没有通过验证
        if(error) {
            cxt.response.status = 406
            cxt.body = { code:406, msg:"error", content:error}
            return
        }
        let user = await User.findByIdAndDelete(id);
        //如果缩略图存在
        if(user.avatar){
            //删除缩略图
            await unlink(path.join(__dirname,'../','../','public',user.avatar))
        }

        cxt.response.status = 204
        cxt.body = { code:204, msg:"success", content:"删除成功",data:user}
    }

}