<template>
  <div>
    <div class="module">
      <div class="input-cell">
        <div class="cell-title">手机号码</div>
        <input class="cell-input" type="number" v-model="mobileNo">
      </div>
      <div class="input-cell">
        <div class="cell-title">证件类型</div>
        <select class="cell-input" name="certiType" v-model="idTypeCode">
          <option v-for="item in certiTypes" :key="item.value" :value="item.value">{{item.text}}</option>
        </select>
      </div>
      <div class="input-cell">
        <div class="cell-title">身份证号码</div>
        <input class="cell-input" type="number" v-model="idNo">
      </div>
      <div class="button-cell">
        <button class="button" @click="bindInfo('new')">绑定</button>
      </div>
    </div>
    <div class="module module2">
      <x-table :content-bordered="false" :cell-bordered="false">
        <tr>
          <td>序号</td>
          <td>手机号码</td>
          <td>证件号码</td>
          <td>操作</td>
        </tr>
        <tbody>
          <tr v-for="(item, index) in userList" :key="index">
            <td>{{index > 8 ? (1+index) : '0' + (1+index)}}</td>
            <td>{{item.mobileNo}}</td>
            <td>{{item.idNo}}</td>
            <td>
              <button v-if="item.status==='Y'" class="btn btn-mini btn-alert" @click="unbindInfo(item.idNo)">解绑</button>
              <button v-else-if="item.status==='N'" class="btn btn-mini btn-active" @click="bindInfo(item)">绑定</button>
            </td>
          </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Group, XInput, Selector, XButton, XTable } from 'vux'
import Controller from './Controller'

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
      mobileNo: '',
      idNo: '',
      idTypeCode: 1,
      certiTypes: [
        {value: 1, text: '身份证'},
        {value: 2, text: '港澳通行证'},
        {value: 3, text: '护照'}
      ],
      info: {
        mobileNo: '',
        idNo: '',
        idTypeCode: 1
      },
      userList: []
    }
  },
  methods: Controller,
  created () {
    this.queryUserInfoList()
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  @import '../../assets/less/form';
  .module {
    background: #fafafa;
    margin-bottom: 10px;
  }
  .module2 {
    padding: 0 0.15rem;
    font-size: @fontSizeTable;
  }
</style>
