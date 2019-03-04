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
  </div>
</template>

<script type="text/ecmascript-6">
import { Group, XInput, Selector, XButton } from 'vux'
export default {
  name: 'info-bind',
  components: {
    Group,
    XInput,
    Selector,
    XButton
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
