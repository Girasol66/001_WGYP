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
  },
  unbindInfo: function (id) {
    console.log('unbindInfo click')
    console.log(id)
    let data = {
      mobileNo: this.mobileNo,
      idTypeCode: this.idTypeCode,
      idNo: this.idNo
    }
    console.log(data)
    axios.post(apis.bindUserInfo, data)
      .then(this.bindInfoSuc)
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
    // this.userList = [
    //   {id: '001', index: '01', mobileNo: '176223212778', idNo: '423908776545563567'},
    //   {id: '001', index: '02', mobileNo: '176223212778', idNo: '423908776545563567'},
    //   {id: '002', index: '03', mobileNo: '176223212778', idNo: '423908776545563567'}
    // ]
    // console.log('query')
  },
  bindInfoSuc: function (res) {
    console.log('操作成功')
  },
  bindInfoFail: function (res) {
    console.log('fail')
  }
}
export default controller
