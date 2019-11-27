const router = require('koa-router')()
const reptileController = require('./controller/reptile-controller')

router.get('/reptile', reptileController.reptile)
router.get('/reptile/test', (ctx) => {
  ctx.body = {
    error_code: 0,
    message: '成功',
    data: {
      list: ['测试', 'test'],
      total: 2
    }
  }
})


module.exports =  router
