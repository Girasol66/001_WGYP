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
    url: '/user/bindUserInfo',
    params: {
      openId: '',
      mobileNo: '',
      idTypeCode: '',
      idNo: ''
    }
  },
  unbindUserInfo: {
    url: '/user/unbindUserInfo'
  },
  queryUserInfoList: {
    url: '/user/qryUserInfo',
    params: {
      openId: ''
    }
  },
  queryPrescriptionList: {
    url: '/order/qryPrescOrders',
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
