//引入模块
const { User }          =     require('../../model/User')
const {validateId}    =     require('../../check/public/index')

module.exports = async ctx => {
    //获取用户id
    const id = req.params['id']

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
            if(error) return ctx.body = {message:error}

        }
    }

}