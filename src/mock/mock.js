import Mock from 'mockjs'
import apis from '../api/api'
import data from './data'

Mock.setup({
  timeout: 10000
})

// 获取openID
Mock.mock(apis.getWechatOpenId.url, 'get', function () {
  debugger
  const success = (parseInt(Math.random() * 100)) % 3 === 0
  const resData = {
    success: success, ...data.data1
  }
  console.log(resData)
  return resData
})

// 绑定用户信息
Mock.mock(apis.bindUserInfo.url, 'post', function () {
  debugger
  const success = (parseInt(Math.random() * 100)) % 3 === 0
  const resData = {
    success: success, ...data.data1
  }
  console.log(resData)
  return resData
})
