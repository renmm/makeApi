/**
 * app入口
 * @author 妙才<renmaomin@126.com>
 */

const koa = require('koa')
const serve = require('koa-static')
const router = require('koa-frouter')
const bodyParser = require('koa-bodyparser')
const scheme = require('koa-scheme')
const chalk = require('chalk')
const path = require('path')
const mongoose = require('mongoose')
const config = require('config')
const getSchemeParams = require('./server/util/schemeParams')

const app = koa()
const ip = config.get('ip')
const port = config.get('port')
var isProduction = function () {
  return process.env.NODE_ENV === 'production'
}
var getDbUrl = function () {
  var ip = config.get('mongodb.ip')
  var port = config.get('mongodb.port')
  var db = config.get('mongodb.db')

  return 'mongodb://' + ip + ':' + port + '/' + db
}

mongoose.connect(getDbUrl(), function (err, res) {
  if (err) {
    console.log(
      chalk.red('[Failed]数据库：'),
      getDbUrl(),
      '错误信息：' + err
    )
  } else {
    console.log(chalk.magenta('[Succeeded]数据库：'), getDbUrl())
  }
})

app.use(bodyParser())
app.use(scheme(getSchemeParams('./server/validator', {debug: true}), {debug: true}))
app.use(serve(path.join(__dirname, isProduction() ? 'dist' : 'src')))
app.use(router(app, './server/route'))

app.listen(port, ip, function () {
  console.log(
    chalk.magenta('Server'),
    chalk.magenta('[开发版]',
      ' listening on ' + chalk.green.underline('http://' + ip + ':' + port) + ', Ctrl+C to stop')
  )
})
