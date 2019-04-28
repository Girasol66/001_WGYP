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
      .then((res) => {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          if (data.returnCode === 'SUCCESS') {
            window.location.replace(data.payUrl)
          } else {
            this.$vux.toast.show({
              type: 'cancel',
              text: '调起支付失败，请重试'
            })
          }
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
          if (data.returnCode === 'SUCCESS') {
            this.toQrCode(data.payUrl)
          } else {
            this.$vux.toast.show({
              type: 'cancel',
              text: '调起支付失败，请重试'
            })
          }
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
        prescAmt: this.prescAmt,
        orderNo: this.orderNo,
        prescNo: this.prescNo
      }
    })
  },
  loadData: function () {
    let route = this.$route
    let query = route.query
    let name = route.name
    console.log(query)
    console.log(name)
    // const route = document.URL.search(/result$/)
    if (JSON.stringify(query) === '{}') {
      const payFlg = sessionStorage.getItem('payFlg')
      this.payFlg = payFlg === 'Y' ? '已缴' : '待缴'
      this.orderNo = sessionStorage.getItem('orderNo')
      this.list = JSON.parse(sessionStorage.getItem('resultList'))
      this.prescNo = sessionStorage.getItem('prescNo')
      this.prescAmt = sessionStorage.getItem('prescAmt')
    } else {
      const payFlg = this.$route.query.payFlg
      this.payFlg = payFlg === 'Y' ? '已缴' : '待缴'
      this.orderNo = query.orderNo
      const orderNo = sessionStorage.getItem('orderNo')
      this.prescNo = this.$route.query.prescNo
      this.prescAmt = this.$route.query.prescAmt
      sessionStorage.setItem('payFlg', query.payFlg)
      sessionStorage.setItem('orderNo', query.orderNo)
      sessionStorage.setItem('prescNo', query.prescNo)
      sessionStorage.setItem('prescAmt', query.prescAmt)
      if (orderNo === query.orderNo) {
        return
      }
      this.list = query.detail
      sessionStorage.setItem('resultList', JSON.stringify(query.detail))
    }
  }
}
export default controller
