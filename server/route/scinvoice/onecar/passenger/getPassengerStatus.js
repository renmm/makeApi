var logger = require('../../../../util/logger')
var message = require('../../../../util/message')
const chalk = require('chalk')
var Mock = require('mockjs')

exports.get = function * () {
  var url = this.url && this.url.split('?')[0]
  var method = this.method
  logger.info(
    chalk.blue('[' + method + ']'),
    chalk.cyan(url),
    '参数:',
    this.query
  )

  var passengerStatus = Mock.mock({
    'objArr|10': [
      'AMD'
    ],
    'isBusiness|1-2': true, // 是否可以因公开票
    'lastApplyTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 上次申请时间
    'popupMessage': { // 弹框提示
      'display|1-2': true, // 是否显示
      'content': '@sentence(5, 15)' // 显示内容
    },
    'isReimbursement|1-2': true // 是否具有企业报销权限
  })
  logger.info(chalk.blue('返回数据:'), passengerStatus)
  this.body = message.success({
    data: passengerStatus
  })
}
