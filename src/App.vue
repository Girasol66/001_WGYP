<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {linkToWXPage, getQueryParams, getAccessToken} from './login'
// import {linkToWXPage} from './login'
export default {
  name: 'App',
  created () {
    this.exeLogin()
  },
  methods: {
    exeLogin () {
      const code = getQueryParams('code')
      alert('code:' + code)
      if (!code) {
        const baseUrl = window.location.href
        sessionStorage.setItem('baseUrl', baseUrl)
        linkToWXPage()
      } else {
        getAccessToken(code)
      }
      alert('href:' + window.location.href)
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
