/**
 * 删除接口的请求数据校验
 * @type {Object}
 */

var validatorUtil = require('../../../util/validator')

module.exports = {
  'request': {
    'method': 'POST',
    'body': {
      'applicationId': validatorUtil.isNotEmpty('applicationId格式不正确')
    }
  }
}
