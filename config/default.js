/**
 * 默认配置（开发）
 * @author 妙才<renmaomin@126.com>
 */
module.exports = {
  ip: process.env.IP || 'localhost',
  port: process.env.PORT || 4000,
  env: {
    asset: '',
    origin: '',
    api: ''
  }
}
