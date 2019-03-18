
/**
 *
 * @param appId
 */
export const linkToWXPage = () => {
  const appId = 'wx63f5e90f26af48a2'
  const ACCESS_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appId + '&redirect_uri=' + encodeURIComponent(window.location.href) +
    '&response_type=code&scope=snsapi_userinfo&state=123&' +
    'connect_redirect=123#wechat_redirect'
  window.location.replace(ACCESS_URL)
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
