var logger = require('../../../../util/logger')
var message = require('../../../../util/message')
const chalk = require('chalk')
var Mock = require('mockjs')

exports.post = function * () {
  var url = this.url && this.url.split('?')[0]
  var method = this.method
  logger.info(
    chalk.blue('[' + method + ']'),
    chalk.cyan(url),
    '参数:',
    this.request.body
  )

  var passengerStatus = Mock.mock({
    'applicationId': '@string("number", 20)' // 申请 id
  })
  logger.info(chalk.blue('返回数据:'), passengerStatus)
  this.body = message.success({
    data: passengerStatus
  })
}
