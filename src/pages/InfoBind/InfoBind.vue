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
        <button class="button" @click="bindInfo">绑定</button>
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
          <tr v-for="(item, index) in userList" :key="index">
            <td>{{item.index}}</td>
            <td>{{item.mobileNo}}</td>
            <td>{{item.idNo}}</td>
            <td><x-button type="default" :mini="true">解绑</x-button></td>
          </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Group, XInput, Selector, XButton, XTable } from 'vux'
import axios from '../../axios/axios'
import apis from '../../api/api'
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
      mobileNo: 18112345678,
      idNo: 320182111233458734,
      idTypeCode: 2,
      certiTypes: [
        {value: 1, text: '身份证'},
        {value: 2, text: '港澳通行证'},
        {value: 3, text: '护照'}
      ],
      userList: [
        {id: '001', index: '01', mobileNo: '176223212778', idNo: '423908776545563567'},
        {id: '002', index: '02', mobileNo: '176223212778', idNo: '423908776545563567'}
      ]
    }
  },
  methods: {
    bindInfo: function () {
      console.log('bindInfo click')
      let data = {
        mobileNo: this.mobileNo,
        idTypeCode: this.idTypeCode,
        idNo: this.idNo
      }
      console.log(data)
      axios.post(apis.bindUserInfo, data)
        .then(this.bindInfoSuc)
        .catch(function (error) {
          console.log(error)
        })
    },
    unbindInfo: function () {
      console.log('bindInfo click')
      let data = {
        mobileNo: this.mobileNo,
        idTypeCode: this.idTypeCode,
        idNo: this.idNo
      }
      console.log(data)
      axios.post(apis.bindUserInfo, data)
        .then(this.bindInfoSuc)
        .catch(function (error) {
          console.log(error)
        })
    },
    bindInfoSuc: function (res) {
      console.log(res)
      // this.$vux.toast.show({
      //   text: '操作失败'
      // })
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  .module {
    background: #fafafa;
    margin-bottom: 10px;
    .input-cell {
      display: flex;
      flex-direction: row;
      background: @white;
      height: 0.425rem;
      line-height: 0.425rem;
      padding: 0 0.15rem;
      position: relative;
      .cell-title {
        width: 0.75rem;
        text-align: left;
        color: #999;
      }
      .cell-input {
        flex:1;
        text-align: right;
        border: none;
        color: @fontColor;
      }
      select {
        /*direction: rtl;*/
        text-align-last: right;
        background: none;
      }
      &:before {
        content: '';
        border-top: 1px solid #d9d9d9;
        position: absolute;
        left: 0.15rem;
        right: 0;
        bottom: 0;
        transform: scaleY(0.5);
      }
    }
    .button-cell {
      padding: 0.265rem 0.15rem;
      background: @white;
      .button {
        width:100%;
        height: 0.475rem;
        line-height: 0.475rem;
        font-size: 0.18rem;
        color: @white;
        background: @themeBgColor;
        border-radius: @borderRadius;
      }
    }
  }
  .button-wrap {
    padding: 10px 0;
  }
</style>
