<template>
  <div class="qr-code">
    <div class="qrcode-title">扫描二维码代付</div>
    <div class="qrcode-content">
      <div class="qrcode">
        <vue-qr :bgSrc='config.logo' :logoSrc="config.logo" :text="config.value" :size="261"></vue-qr>
        <!--<qrcode-vue :value="value" ref="qrCodeUrl"></qrcode-vue>-->
      </div>
      <div class="qrcode-price">代付金额：216.00</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import VueQr from 'vue-qr'
export default {
  name: 'qr-code',
  components: {VueQr},
  data () {
    return {
      value: '172727npm',
      config: {
        value: 'www.baidu.com', // 显示的值、跳转的地址
        imagePath: require('../../assets/logo.png') // 中间logo的地址
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  canvas {
    width: 1.3rem!important;
    height: 1.3rem!important;
  }
  .qr-code {
    height: 100vh;
    background: #108ee9;
    padding: 0.32rem 0.15rem 0.37rem;
    .qrcode-title {
      position: relative;
      height: 0.97rem;
      line-height: 0.97rem;
      font-size: 0.2rem;
      border-radius: 6px 6px 0 0;
      background: @white;
      &:before, &:after {
        content: '';
        width: 0.125rem;
        height: 0.125rem;
        position: absolute;
        bottom: 0;
        background: #108EE9;
      }
      &:before {
        left: 0;
        border-top-right-radius: 100%;
      }
      &:after {
        right: 0;
        border-top-left-radius: 100%;
      }
    }
    .qrcode-content {
      position: relative;
      height: 3.98rem;
      padding: 0.42rem 0.42rem 0.03rem;
      background: @white;
      border-radius: 0 0 6px 6px;
      .qrcode {
        width: 2.61rem;
        height: 2.61rem;
        background: gray;
        &:before {
          content: '';
          position: absolute;
          left: 0.2rem;
          right: 0.2rem;
          top: 0rem;
          border-top: 1px dotted #979797;
        }
      }
      .qrcode-price {
        font-size: 0.2rem;
        line-height: 0.8rem;
      }
      &:before, &:after {
        content: '';
        width: 0.125rem;
        height: 0.125rem;
        position: absolute;
        top: 0;
        background: #108EE9;
      }
      &:before {
        left: 0;
        border-bottom-right-radius: 100%;
      }
      &:after {
        right: 0;
        border-bottom-left-radius: 100%;
      }
    }
  }
</style>
