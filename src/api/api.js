const apis = {
  default: {
    baseUrl: 'http://192.168.1.92:8888',
    method: 'POST',
    timeout: 20000,
    headers: {
      'Authorization': '',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*' // 跨域
    }
  },
  getWechatOpenId: {
    url: '/user/getOpenId',
    params: {}
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
  },
  querySelfPayOrder: {
    url: '/pay/orderSelfPay',
    params: {
      orderNo: '',
      prescNo: '',
      prescAmt: ''
    }
  },
  queryAnotherPayOrder: {
    url: '/pay/orderAnotherPay',
    params: {
      orderNo: '',
      prescNo: '',
      prescAmt: ''
    }
  },
  // 处方订单支付结果查询
  queryOrderPayRes: {
    url: '/qryOrderPayRes',
    params: {
      orderNo: '',
      prescNo: ''
    }
  }
}

export default apis
