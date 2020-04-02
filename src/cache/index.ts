import Axios from 'axios'

const checkCacheStatus = async () => {
  return Axios.get(`${process.env.VAPOUR_BASE}/status`)
}

const setValue = async () => {
  return true
}
const getValue = async () => {
  return true
}

const CacheHandler = {
  get: getValue,
  set: setValue,
  initialize: checkCacheStatus
}

export default CacheHandler
