<template>
  <div>
    <div class="module">
      <div class="cell-box">
        <div class="cell-title">手机号码</div>
        <div class="input-box">
          <input type="number" class="input">
        </div>
      </div>
      <div class="cell-box">
        <div class="cell-title">证件类型</div>
        <div class="input-box">
          <select type="number" class="input"></select>
        </div>
      </div>
      <div class="cell-box">
        <div class="cell-title">证件号码</div>
        <div class="input-box">
          <input type="number" class="input">
        </div>
      </div>
      <div class="flex-box">
        <div class="flex-item cell-box">
          <div class="cell-title">证件号码</div>
          <div class="input-box">
            <input type="number" class="input">
          </div>
        </div>
        <div class="flex-item cell-box"><div class="cell-title">证件号码</div>
          <div class="input-box">
            <input type="number" class="input">
          </div></div>
      </div>
      <div class="button-box">
        <button class="button ">查询</button>
      </div>
    </div>
    <div class="module">
      <x-table :content-bordered="false" :cell-bordered="false">
        <tr>
          <td>序号</td>
          <td>手机号码</td>
          <td>证件号码</td>
          <td>操作</td>
        </tr>
        <tbody>
        <tr>
          <td>01</td>
          <td>18131234567</td>
          <td>420182111222112211</td>
          <td><x-button type="default" :mini="true">解绑</x-button></td>
        </tr>
        <tr>
          <td>02</td>
          <td>18131234567</td>
          <td>420182111222112211</td>
          <td><x-button type="default" :mini="true">解绑</x-button></td>
        </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { XTable, XButton } from 'vux'
export default {
  name: 'prescription-query',
  components: {
    XTable,
    XButton
  },
  data () {
    return {
      value: 0,
      certiType: [
        {key: '身份证', value: 1},
        {key: '港澳通行证', value: 2}
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  .cell-box {
    .cell-title {
      text-align: left;
      height: 0.3rem;
      line-height: 0.3rem;
      padding: 0 0.15rem;
      color: @labelColor;
    }
  }
  .input-box {
    padding: 0 0.15rem 0.15rem;
    .input {
      width: 100%;
      height: 0.35rem;
      padding: 0 0.13rem;
      background: @inputBg;
      border: @border;
      border-radius: @borderRadius;
    }
    .button[type='primary'] {
      color: @buttonFontColor
    }
  }
  .button-box {
    padding: 0.22rem 0.15rem 0.20rem;
    .button {
      width: 100%;
      height: 0.47rem;
      background: @buttonColor;
      color: @buttonFontColor;
      border-radius: @borderRadius;
    }
  }
  .flex-box {
    display: flex;
    flex-direction: row;
    .flex-item {
      flex: 1;
    }
  }
</style>
