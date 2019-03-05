<template>
  <div>
    <div class="module">
      <group>
        <x-input title="手机号码" v-model="telephone" text-align="right"></x-input>
        <selector title="证件类型" v-model="value" :options="certiType"></selector>
        <x-input title="身份证号码" v-model="cardnumber" text-align="right"></x-input>
      </group>
      <div class="button-wrap">
        <x-button type="primary">按钮</x-button>
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
import { Group, XInput, Selector, XButton, XTable } from 'vux'
export default {
  name: 'info-bind',
  components: {
    Group,
    XInput,
    Selector,
    XButton,
    XTable
  },
  data () {
    return {
      telephone: 18112345678,
      value: 1,
      cardnumber: 2420,
      certiType: [
        {key: '身份证', value: 1},
        {key: '港澳通行证', value: 2}
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .module {
    background: #fafafa;
    margin-bottom: 10px;
  }
  .button-wrap {
    padding: 10px 0;
  }
</style>
