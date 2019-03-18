import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  bindInfo: function () {
    console.log('bindInfo click')
    const {openId} = sessionStorage
    let data = {
      openId: openId,
      mobileNo: this.mobileNo,
      idTypeCode: this.idTypeCode,
      idNo: this.idNo
    }
    console.log(data)
    axios.post(apis.bindUserInfo, data)
      .then(this.requestSuc)
      .catch(function (error) {
        console.log(error)
      })
  },
  unbindInfo: function (id) {
    console.log('unbindInfo click')
    console.log(id)
    let target = this.userList.filter(function (item) {
      if (item.idNo === id) {
        return true
      } else {
        return false
      }
    })
    const {openId} = sessionStorage
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
    const {openId} = sessionStorage
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
          this.userList = data.data[0].userBindInfos
          // this.bindInfoSuc()
        } else {
          // this.bindInfoFail()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  requestSuc: function (res) {
    console.log('操request成功')
    const {status, data} = res
    if (status === 200) {
      this.$vux.toast.show({
        text: data.returnMsg
      })
      console.log(data.returnMsg)
    } else {
      this.$vux.toast.show({
        type: 'cancel',
        text: data.returnMsg
      })
    }
  },
  bindInfoFail: function (res) {
    console.log('fail')
  }
}
export default controller
