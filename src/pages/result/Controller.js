import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  // 查询处方
  queryPrescriptionList: function () {
    const data = {
      patPhoneNo: '001',
      patIdNo: '32012233331112444',
      patIdTypeCode: '1',
      payStatus: 'O',
      beginDate: this.beginDate,
      endDate: this.endDate
    }
    axios.post(apis.queryPrescriptionList, data)
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          // this.bindInfoSuc()
        } else {
          // this.bindInfoFail()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    // this.prescriptionList = [
    //   {patPatientID: '001', patName: '李大毛', prescNo: '02103', prescAmt: '329.09', payFlg: 'Y'},
    //   {patPatientID: '002', patName: '李二毛', prescNo: '02103', prescAmt: '39.09', payFlg: 'N'}
    // ]
  },
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
        payUrl: payUrl
      }
    })
  },
  // 查看结果
  checkResult: function (data) {
    console.log('check')
    console.log(data)
    this.$router.push({
      path: this.$routes.result.path
    })
  }
}
export default controller
