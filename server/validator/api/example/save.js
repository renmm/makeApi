/**
 * 保存接口的数据校验
 * @author 妙才<renmaomin@126.com>
 */

var validatorUtil = require('../../../util/validator')

module.exports = {
  'request': {
    'method': 'POST',
    'body': {
      'applicationId': validatorUtil.isNotEmpty('applicationId格式不正确'),
      'recipientName': validatorUtil.isNotEmpty('recipientName格式不正确'),
      'recipientPhone': validatorUtil.isPhone
    }
  }
}
