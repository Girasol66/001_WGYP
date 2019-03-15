// import axios from 'axios/axios'
// axios.defaults.baseURL = 'https://open.weixin.qq.com'

/**
 *
 * @param appId
 */
export const linkToWXPage = () => {
  const appId = 'wx59689031aa71685f'
  const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appId + '&redirect_uri=' + encodeURIComponent(window.location.href) +
    '&response_type=code&scope=snsapi_userinfo&state=123&' +
    'connect_redirect=123#wechat_redirect'
  window.location.replace(ACCESS_URL)
}

/**
 * getAccessToken
 * @param url
 */
export const getAccessToken = (code) => {
  alert('get at & code:' + code)
  const appId = 'wx59689031aa71685f'
  const appSecret = '13723b1de85dd374a80d273a4d1b96bf'
  const target = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + appId + '&secret=' + appSecret + '&code=' + code + '&grant_type=authorization_code'
  // const url = 'http://query.yahooapis.com/v1/public/yql'
  this.$axios(target)
    .then((response) => {
      alert('response:')
      alert(response)
    })
    .catch((error) => {
      alert('error:')
      alert(error)
    })
}

/**
 *
 * @param data
 */
export const saveLocalStorage = (data) => {
  const {
    WechatAppId,
    AccessToken,
    RefreshToken,
    WechatAccessToken,
    WechatRefreshToken
  } = data
  localStorage.setItem('WechatAppId', WechatAppId)
  localStorage.setItem('AccessToken', 'Bearer ' + AccessToken)
  localStorage.setItem('RefreshToken', RefreshToken)
  localStorage.setItem('WechatAccessToken', WechatAccessToken)
  localStorage.setItem('WechatRefreshToken', WechatRefreshToken)
}

/**
 * 获取请求路径参数
 * @param name
 * @returns {*}
 */
export const getQueryParams = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
