import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  // 自付
  querySelfPayOrder: function () {
    if (this.hasPaid) {
      this.$vux.toast.show({
        text: '订单已支付'
      })
      return
    }
    const data = {
      orderNo: this.orderNo,
      prescNo: this.prescNo,
      prescAmt: this.prescAmt
    }
    axios.post(apis.querySelfPayOrder, data)
      .then(function (res) {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          window.location.replace(data.payUrl)
          // this.bindInfoSuc()
        } else {
          // this.bindInfoFail()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // 他付
  queryAnotherPayOrder: function () {
    if (this.hasPaid) {
      this.$vux.toast.show({
        text: '订单已支付'
      })
      return
    }
    const data = {
      orderNo: this.orderNo,
      prescNo: this.prescNo,
      prescAmt: this.prescAmt
    }
    axios.post(apis.queryAnotherPayOrder, data)
      .then((res) => {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          this.toQrCode(data.payUrl)
          // this.bindInfoSuc()
        } else {
          // this.bindInfoFail()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // 查询是否已支付成功
  queryOrderPayRes: function () {
    const data = {
      orderNo: this.orderNo,
      prescNo: this.prescNo
    }
    axios.post(apis.queryOrderPayRes, data)
      .then((res) => {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          console.log(data)
          this.hasPaid = Boolean(data.payFlg === 'Y')
        } else {
          // this.bindInfoFail()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  toQrCode: function (payUrl) {
    console.log(payUrl)
    this.$router.push({
      path: '/QrCode',
      query: {
        payUrl: payUrl,
        prescAmt: this.prescAmt
      }
    })
  },
  loadData: function () {
    let query = this.$route.query
    if (JSON.stringify(query) === '{}') {
      const payFlg =JSON.parse(sessionStorage.getItem('payFlg'))
      this.payFlg = payFlg === 'Y' ? '已缴' : '待缴'
      this.orderNo = JSON.parse(sessionStorage.getItem('orderNo'))
      this.list = JSON.parse(sessionStorage.getItem('resultList'))
      this.prescNo = JSON.parse(sessionStorage.getItem('prescNo'))
      this.prescAmt = JSON.parse(sessionStorage.getItem('prescAmt'))
    } else {
      const payFlg = this.$route.query.payFlg
      this.payFlg = payFlg === 'Y' ? '已缴' : '待缴'
      this.orderNo = this.$route.query.orderNo
      this.list = this.$route.query.detail
      this.prescNo = this.$route.query.prescNo
      this.prescAmt = this.$route.query.prescAmt
      sessionStorage.setItem('payFlg', JSON.stringify(query.payFlg))
      sessionStorage.setItem('orderNo', JSON.stringify(query.orderNo))
      sessionStorage.setItem('resultList', JSON.stringify(query.detail))
      sessionStorage.setItem('prescNo', JSON.stringify(query.prescNo))
      sessionStorage.setItem('prescAmt', JSON.stringify(query.prescAmt))
    }
  }
}
export default controller
