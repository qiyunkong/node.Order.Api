//导入模块
const Order                 =     require('../../model/Order')
const alipaySdk             =     require('../../config/alipayConfig');
const AlipayFormData        =     require('alipay-sdk/lib/form').default; // alipay.trade.page.pay 返回的内容为 Form 表单
const {updateId}                    =     require('../../servers/base')
// const Order                 =     require('../../model/Order')
//暴露模块
module.exports = async cxt => {
  // //获取POST参数
  // const body = cxt.request.body
  // let httpData = await addModel(body,Order);
  // //设置状态值
  // cxt.response.status = httpData.code
  // //响应
  // cxt.body = httpData

  //获取单号
  let orderId= cxt.request.body.orderId
  const data =  await Order.where({paymentStatus:false}).where({orderOutNo:orderId})
  if(data.length == 0) return  cxt.body = {msg:"输入的单号不对"}
  data[0].paymentStatus = true
  const _data = await updateId(data[0],Order)


  // * 添加购物车支付支付宝 */
  // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
  const formData = new AlipayFormData();
  formData.setMethod('get');
  // 通过 addField 增加参数
  // 在用户支付完成之后，支付宝服务器会根据传入的 notify_url，以 POST 请求的形式将支付结果作为参数通知到商户系统。
  formData.addField('notifyUrl', 'http://localhost:3001/api/payment/'); // 支付成功回调地址，必须为可以直接访问的地址，不能带参数
  formData.addField('bizContent', {
    outTradeNo: data[0]._id, // 商户订单号,64个字符以内、可包含字母、数字、下划线,且不能重复
    productCode: 'FAST_INSTANT_TRADE_PAY', // 销售产品码，与支付宝签约的产品码名称,仅支持FAST_INSTANT_TRADE_PAY
    totalAmount: data[0].price + '.00', // 订单总金额，单位为元，精确到小数点后两位
    subject: '干饭庄消费', // 订单标题
    body: '商品详情', // 订单描述

  });

  formData.addField('returnUrl', 'https://opendocs.alipay.com');//加在这里才有效果,不是加在bizContent 里面
  // 如果需要支付后跳转到商户界面，可以增加属性"returnUrl"
  const result =  alipaySdk.exec(  // result 为可以跳转到支付链接的 url
    'alipay.trade.page.pay', // 统一收单下单并支付页面接口
    {}, // api 请求的参数（包含“公共请求参数”和“业务参数”）
    { formData: formData },
  );
  result.then((resp)=>{

    cxt.body = {
      "success": true,
      "message": "success",
      "code": 200,
      "timestamp": (new Date()).getTime(),
      "result": resp
    }
  })





}

