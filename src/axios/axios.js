import Vue from 'vue'
import axios from 'axios'
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
    // Vue.$vux.loading.show({
    //   text: '加载中...'
    // })
    console.log('加载中')
    config = getConfig(config)
    return config
  }, error => {
    // Vue.$vux.toast.show({
    //   type: 'cancel',
    //   text: '连接异常'
    // })
    console.log('连接异常')
    Vue.$vux.loading.hide()
    return Promise.reject(error)
  })

axios.interceptors.response.use(
  response => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Vue.$vux.loading.hide()
        resolve(response.data)
      }, 1000)
    })
  }, error => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Vue.$vux.toast.show({
        //   type: 'cancel',
        //   text: '连接异常'
        // })
        console.log('连接异常')
        // Vue.$vux.loading.hide()
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
