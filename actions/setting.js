//导入模块
const Joi = require('joi');

//注册数据格式校验
const validateSettings = settings => {
	//定义对象验证规则
	const schema = {
		title: Joi.string().min(2).max(30).required().error(new Error('网站标题不符合验证规则'))
	};
	//验证
	return Joi.validate(settings, schema, {
		//检测到所有错误
		abortEarly: false,
		//允许对象包含被忽略的未知键
		allowUnknown: true
	});
}

// 导出对象
module.exports = {
	validateSettings
};