<template>
  <div>
    <div class="status-module">
      <img class="status-img" :src="img" alt="">
      <p class="status-msg">支付失败</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'fail',
  data () {
    return {
      img: require('../assets/images/paid_fail.png')
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
      color: @fontColor;
      margin-top: 0.12rem;
    }
  }
</style>
