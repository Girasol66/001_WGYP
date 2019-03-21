import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  // 查询处方
  queryPrescriptionList: function () {
    const {openId} = sessionStorage
    const data = {
      openId: openId,
      payStatus: 'O',
      beginDate: this.beginDate.replace(/-/g, ''),
      endDate: this.endDate.replace(/-/g, '')
    }
    axios.post(apis.queryPrescriptionList, data)
      .then((res) => {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          console.log(data.returnMsg)
          const listData = data.data
          if (listData && listData.length) {
            this.prescriptionList = data.data
          } else {
            this.$vux.toast.show({
              text: '暂无数据'
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
  // 查看结果
  checkResult: function (item) {
    console.log('check')
    // console.log(item.id)
    // const id = item.id
    const orderNo = item.orderNo
    const payFlg = item.payFlg
    const detail = item.detail
    // const data = this.prescriptionList.filter((item) => {
    //   if (item.patPatientID === id) {
    //     return true
    //   }
    // })
    this.$router.push({
      path: '/Result',
      query: {
        orderNo: orderNo,
        payFlg: payFlg,
        prescNo: item.prescNo,
        prescAmt: item.prescAmt,
        detail: detail
      }
    })
  }
}
export default controller
