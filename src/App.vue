<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {linkToWXPage, getQueryParams} from './login'
import Vue from 'Vue'
import axios from './axios/axios'
import apis from './api/api'
export default {
  name: 'App',
  created () {
    this.exeLogin()
  },
  methods: {
    exeLogin () {
      const code = getQueryParams('code')
      console.log('code:' + code)
      if (!code) {
        const baseUrl = window.location.href
        sessionStorage.setItem('baseUrl', baseUrl)
        linkToWXPage()
      } else {
        sessionStorage.setItem('wechatCode', code)
        this.getWechatOpenId(code)
      }
      // const {AccessToken} = localStorage
      // alert('start')
      // if (!AccessToken) {
      //   alert('!at')
      //   const code = getQueryParams('code')
      //   if (!code) {
      //     alert('!code')
      //     const baseUrl = window.location.href
      //     sessionStorage.setItem('baseUrl', baseUrl)
      //     linkToWXPage()
      //     alert(baseUrl)
      //   } else {
      //     alert('code')
      //     if (this.exeCheckCode(code)) {
      //       this.exeRefresh()
      //     }
      //     sessionStorage.setItem('baseCode', code)
      //     const params = {value: code}
      //     this.exeSelectDeviceId(params)
      //   }
      // }
    },
    getWechatOpenId (code) {
      const data = {
        code: code
      }
      axios.get(apis.getWechatOpenId, {params: data})
        .then((res) => {
          console.log(res)
          const {status, data} = res
          if (status === 200) {
            console.log(data.returnMsg)
            if (data.returnCode === 'SUCCESS') {
              sessionStorage.setItem('openId', data.openId)
            } else {
              Vue.$vux.loading.show({
                type: 'cancel',
                text: data.returnMsg
              })
            }
            // this.prescriptionList = data.data
          } else {
            // this.bindInfoFail()
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    exeRefresh () {
      const {baseUrl} = sessionStorage || window.location.href
      window.location.replace(baseUrl)
    },
    exeCheckCode (code) {
      let result = false
      const {baseCode} = sessionStorage
      if (baseCode && baseCode === code) {
        result = true
      }
      return result
    }
  }
}
</script>

<style lang="less">
@import "assets/less/common.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
