const Log              =     require('../model/Log')
const log = async (ctx, next)=>{
  console.log(ctx)
  await next();
  console.log(ctx)
}

module.exports = {
  log
}