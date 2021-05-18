//引入模块
const Joi = require("joi")


//注册数据格式校验
const validateUser = user => {
	// 定义对象验证规则
	const schema = {
		nickName: Joi.string().min(2).max(30).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).required().error(new Error('邮箱不符合验证规则')),
		password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/).error(new Error('密码不符合验证规则')),
		status: Joi.number().valid(0, 1),
		role: Joi.string().valid('normal', 'admin')
	};
	// 验证
	return Joi.validate(user, schema, {
		// 检测到所有错误
		abortEarly: false,
		// 允许对象包含被忽略的未知键
		allowUnknown: true
	});
}


//登录数据格式校验
const validateLogin = user => {
    //定义对象验证规则
    const Schema = {
        email: Joi.string().regex(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).required().error(new Error('邮箱错误')),
        // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).error(new Error('密码错误'))
    };

    //验证
    return Joi.validate(user,Schema,{
        //检测到错误立即返回
        abortEarly:true
    });
}



//导出模块
module.exports = {
    validateUser,
    validateLogin
}