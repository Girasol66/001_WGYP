import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  // 自付
  querySelfPayOrder: function () {
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
  toQrCode: function (payUrl) {
    console.log(payUrl)
    this.$router.push({
      path: '/QrCode',
      query: {
        payUrl: payUrl,
        prescAmt: this.prescAmt
      }
    })
  }
}
export default controller
