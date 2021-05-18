//引入模块
const Joi       =       require("joi")

//用户ID校验
const validateId = id => {
    //定义验证规则
    const schema = Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).error(new Error('用户id不符合格式'));
    // 验证
    return Joi.validate(id, schema,{
        //检测到错误立即返回
        abortEarly:true
    })
}

//导出模块
module.exports = {
    validateId,
}