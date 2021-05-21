//引入模块
const Joi = require("joi")

const {validateId}      =     require('./public/index')

//注册数据格式校验
const validateCategory = category => {
    // 定义对象验证规则
    const schema = {
        name: Joi.string().min(2).max(30).required().error(new Error('名称不符合验证规则')),
        desc: Joi.string().min(2).max(200).error(new Error('描述不符合验证规则')),
    };
    // 验证
    return Joi.validate(category, schema, {
        // 检测到所有错误
        abortEarly: false,
        // 允许对象包含被忽略的未知键
        allowUnknown: true
    });
}


const validateListId = (list) => {
    for(const item of list){
        //验证
        let {error} = validateId(item)
        if(error){
            return error
        }

    }
    return false
}


//导出模块
module.exports = {
    validateListId,
    validateCategory,
}