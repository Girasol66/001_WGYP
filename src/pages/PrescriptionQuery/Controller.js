import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  // 查询处方
  queryPrescriptionList: function () {
    const data = {
      openId: '5816',
      payStatus: 'Y',
      beginDate: this.beginDate.replace(/-/g, ''),
      endDate: this.endDate.replace(/-/g, '')
    }
    axios.post(apis.queryPrescriptionList, data)
      .then((res) => {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          console.log(data.returnMsg)
          this.prescriptionList = data.data
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
  checkResult: function (id) {
    console.log('check')
    console.log(id)
    const data = this.prescriptionList.filter((item) => {
      if (item.patPatientID === id) {
        return true
      }
    })
    this.$router.push({
      path: '/Result',
      query: {
        data: data
      }
    })
  }
}
export default controller
