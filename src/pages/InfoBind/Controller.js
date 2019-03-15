import axios from '../../axios/axios'
import apis from '../../api/api'

const controller = {
  bindInfo: function () {
    console.log('bindInfo click')
    let data = {
      openId: '123',
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
    let data = {
      openId: '123',
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
    let data = {
      openId: '123'
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
    // this.userList = [
    //   {id: '001', index: '01', mobileNo: '176223212778', idNo: '423908776545563567'},
    //   {id: '001', index: '02', mobileNo: '176223212778', idNo: '423908776545563567'},
    //   {id: '002', index: '03', mobileNo: '176223212778', idNo: '423908776545563567'}
    // ]
    // console.log('query')
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
