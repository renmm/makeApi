/**
 * 产品配置（线上）
 * @author 妙才<renmaomin@126.com>
 */
export default {
  ip: process.env.IP || '10.97.182.220',
  port: process.env.PORT || 4000,
  mongodb: {
    ip: '127.0.0.1',
    port: '27017',
    db: 'club'
  },
  env: {
    asset: '',
    origin: '',
    api: ''
  }
}
