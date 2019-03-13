const apis = {
  default: {
    baseUrl: 'http://192.168.1.92:8888',
    method: 'POST',
    timeout: 20000,
    headers: {
      'Authorization': '',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8', // 'application/x-www-form-urlencoded;charset=UTF-8', // application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  },
  getWechatOpenId: {

  },
  bindUserInfo: {
    url: '/userInfo/bindUserInfo',
    params: {
      openId: '',
      mobileNo: '',
      idTypeCode: '',
      idNo: ''
    }
  },
  unbindUserInfo: {
    url: '/unbindUserInfo'
  },
  queryUserInfo: {
    url: '/qryUserInfo',
    params: {
      openId: ''
    }
  }
}

export default apis
