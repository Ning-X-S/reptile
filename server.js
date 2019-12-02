const path = require('path')
const fs = require('fs')

const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-body')
const router = require('./app/router')
const headerHandler = require('./app/middleware/header-handler')
const globalConfigInjector = require('./app/middleware/global-injector')

const STATIC = path.resolve('./static')
const HTML_404 = fs.readFileSync(path.resolve('./404.html'), 'utf-8')

const port = 7777
const globalConfig = {
  STATIC: STATIC,
  HTML_404: HTML_404
}

app.use(headerHandler())
app.use(globalConfigInjector(globalConfig))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port)
console.log(port)
console.log(`http://127.0.0.1:${port}`)
