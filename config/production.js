/**
 * 产品配置（线上）
 * @author 妙才<renmaomin@126.com>
 */
module.exports = {
  ip: process.env.IP || '10.97.182.220',
  port: process.env.PORT || 4000,
  env: {
    asset: '',
    origin: '',
    api: ''
  }
}
