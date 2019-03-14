const apis = {
  default: {
    baseUrl: 'http://192.168.1.92:8888',
    method: 'POST',
    timeout: 20000,
    headers: {
      'Authorization': '',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
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
    url: '/userInfo/unbindUserInfo'
  },
  queryUserInfoList: {
    url: '/userInfo/qryUserInfo',
    params: {
      openId: ''
    }
  },
  queryPrescriptionList: {
    url: '/userInfo/qryPrescOrders',
    params: {
      patPhoneNo: '',
      patIdNo: '',
      patIdTypeCode: '',
      payStatus: '',
      beginDate: '',
      endDate: ''
    }
  }
}

export default apis
