import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  bindInfo: function (params) {
    if (params !== 'new') {
      this.mobileNo = params.mobileNo
      this.idTypeCode = params.idTypeCode
      this.idNo = params.idNo
    }
    const {openId} = localStorage
    if (!this.validateForm()) {
      return false
    }
    let data = {
      openId: openId,
      mobileNo: this.mobileNo,
      idTypeCode: this.idTypeCode,
      idNo: this.idNo
    }
    console.log(data)
    axios.post(apis.bindUserInfo, data)
      .then((res) => {
        this.requestSuc(res)
        this.resetFormData()
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  unbindInfo: function (id) {
    console.log(id)
    let target = this.userList.filter(function (item) {
      if (item.idNo === id) {
        return true
      } else {
        return false
      }
    })
    const {openId} = localStorage
    let data = {
      openId: openId,
      mobileNo: target[0].mobileNo,
      idTypeCode: target[0].idTypeCode,
      idNo: target[0].idNo
    }
    console.log(data)
    axios.post(apis.unbindUserInfo, data)
      .then(this.requestSuc)
      .catch(function (error) {
        console.log(error)
      })
  },
  queryUserInfoList: function () {
    const {openId} = localStorage
    let data = {
      openId: openId
    }
    console.log(data)
    axios.post(apis.queryUserInfoList, data)
      .then((res) => {
        console.log(res)
        const {status, data} = res
        if (status === 200) {
          console.log(data)
          const listdata = data.data
          if (listdata && listdata.length) {
            this.$vux.toast.show({
              text: '查询成功'
            })
            this.userList = listdata[0].userBindInfo
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
  exeRefresh: function () {
    window.location.reload()
  },
  resetFormData: function () {
    this.mobileNo = ''
    this.idNo = ''
    this.idTypeCode = 1
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
    } else if (!this.isCardNo(this.idNo)) {
      // this.$vux.toast.hide()
      // this.$vux.toast.show({
      //   type: 'cancel',
      //   text: '请输入正确的证件号码'
      // })
      // return false
    }
    return true
  },
  requestSuc: function (res) {
    console.log('操作成功')
    const {status, data} = res
    if (status === 200) {
      this.$vux.toast.hide()
      this.$vux.toast.show({
        text: data.returnMsg
      })
      this.queryUserInfoList()
      console.log(data.returnMsg)
    } else {
      this.$vux.toast.show({
        type: 'cancel',
        text: data.returnMsg
      })
    }
  },
  isCardNo: function (cardNo) {
    /**
     * var re = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;//港澳通行证
     * 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X */
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)|(^[HMhm]{1}([0-9]{10}|[0-9]{8})$)/
    if (reg.test(cardNo) === false) {
      console.log('身份证输入不合法')
      return false
    }
    console.log('合法的')
    return true
  }
}
export default controller
