import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  // 查询处方
  queryPrescriptionList: function () {
    const {openId} = localStorage
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
            this.prescriptionList = []
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
    const orderNo = item.orderNo
    const payFlg = item.payFlg
    const detail = item.detail
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
  },
  validateForm: function () {
    if (!this.mobileNo) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        type: 'cancel',
        text: '手机号码不能为空'
      })
      return false
    } else if (this.mobileNo.length !== 11) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        type: 'cancel',
        text: '请输入正确的手机号'
      })
      return false
    }
    if (!this.idNo) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        type: 'cancel',
        text: '证件号码不能为空'
      })
      return false
    } else if (this.idNo.length !== 18) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        type: 'cancel',
        text: '请输入正确的证件号码'
      })
      return false
    }
    if (!this.beginDate) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        type: 'cancel',
        text: '开始日期不能为空'
      })
      return false
    }
    if (!this.endDate) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        type: 'cancel',
        text: '结束日期不能为空'
      })
      return false
    }
    return true
  },
  switchTab: function (state) {
    if (state) {
      this.payState = true
    } else {
      this.payState = false
    }
  }
}
export default controller
