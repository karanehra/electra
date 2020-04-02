import http from 'http'

const checkCacheStatus = async () => {
  return http.get(`${process.env.VAPOUR_BASE}/status`)
}

const setValue = async () => {}
const getValue = async () => {}

const CacheHandler = {
  get: getValue,
  set: setValue,
  initialize: checkCacheStatus
}

export default CacheHandler
