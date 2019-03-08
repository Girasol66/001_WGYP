<template>
  <div>
    <div class="status-module">
      <img class="status-img" :src="img" alt="">
      <p class="status-msg">支付成功</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'success',
  data () {
    return {
      img: require('../assets/images/paid_suc.png')
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/less/variable';
  .status-module {
    height: 2.6rem;
    background: @white;
    .status-img {
      width: 1.34rem;
      margin-top: 0.6rem;
    }
    .status-msg {
      font-size: 0.25rem;
      font-family: 'PingFangSC-Thin', 'Microsoft YaHei UI';
      font-weight: lighter;
      color: @themeFontColor;
      margin-top: 0.12rem;
    }
  }
</style>
