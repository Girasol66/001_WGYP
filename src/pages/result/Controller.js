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
