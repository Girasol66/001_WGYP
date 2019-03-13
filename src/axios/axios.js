import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import apis from '../api/api'

axios.defaults.timeout = apis.default.timeout
axios.defaults.baseURL = apis.default.baseUrl
axios.defaults.headers = apis.default.headers

axios.interceptors.request.use(
  config => {
    const AccessToken = localStorage.getItem('AccessToken')
    if (AccessToken) {
      config.headers = {'Authorization': AccessToken}
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    console.log('加载中')
    config = getConfig(config)
    return config
  }, error => {
    console.log('连接异常')
    Vue.$vux.loading.hide()
    return Promise.reject(error)
  })

axios.interceptors.response.use(
  response => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.data)
      }, 1000)
    })
  }, error => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('连接异常')
        resolve(error.response)
      }, 1000)
    })
  }
)

const getConfig = (config) => {
  const {data} = config
  const opts = config.url
  if (data) {
    const {url, params} = opts
    config.url = url
    config.data = Object.assign(params, data)
  } else {
    const {url} = opts
    config.url = url
  }
  return config
}

export default axios
