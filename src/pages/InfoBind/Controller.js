import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  bindInfo: function (params) {
    if (params !== 'new') {
      this.mobileNo = params.mobileNo
      this.idTypeCode = params.idTypeCode
      this.idNo = params.idNo
    }
    const {openId} = sessionStorage
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
          const listdata = data.data
          if (listdata && listdata.length) {
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
  resetFormData: function () {
    this.mobileNo = ''
    this.idNo = ''
    this.idTypeCode = 1
  },
  requestSuc: function (res) {
    console.log('操作成功')
    const {status, data} = res
    if (status === 200) {
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
  }
}
export default controller
