module.exports = function (globalConfig = {}) {
    return async (ctx, next) => {
      // 注入 server.js 中定义的全局配置到 ctx.state 中
      ctx.state = Object.assign(ctx, globalConfig)
      await next()
    }
  }
  