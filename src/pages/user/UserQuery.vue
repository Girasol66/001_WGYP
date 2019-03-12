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
          <select class="input" name="certiType" v-model="idTypeCode">
            <option v-for="item in certiTypes" :key="item.value" :value="item.value">{{item.text}}</option>
          </select>
          <!--<select type="number" class="input"></select>-->
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
          <td>处方号</td>
          <td>金额</td>
          <td>缴费状态</td>
          <td>操作</td>
        </tr>
        <tbody>
        <tr v-for="(item, index) in prescriptionList" :key="index">
          <td>{{item.index}}</td>
          <td>{{item.prescNo}}</td>
          <td>{{item.patName}}</td>
          <td>{{item.prescAmt}}</td>
          <td>{{item.payFlg == 'Y' ? '已缴' : '待缴'}}</td>
          <button class="btn btn-mini btn-active" @click="unbindInfo(item.id)">解绑</button>
        </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { XTable, XButton } from 'vux'
export default {
  name: 'user-query',
  components: {
    XTable,
    XButton
  },
  data () {
    return {
      idTypeCode: 2,
      certiTypes: [
        {value: 1, text: '身份证'},
        {value: 2, text: '港澳通行证'},
        {value: 3, text: '护照'}
      ],
      prescriptionList: [
        {patPatientID: '001', patName: '李大毛', prescNo: '02103', prescAmt: '329.09', payFlg: 'Y'},
        {patPatientID: '002', patName: '李二毛', prescNo: '02103', prescAmt: '39.09', payFlg: 'N'}
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
  .module2 {
    padding: 0 0.15rem;
    font-size: @fontSizeTable;
  }
  .btn {
    color: @themeColor;
    border: 1px solid @themeColor;
    border-radius: @borderRadius;
    padding: 0.03rem 0.1rem;
  }
</style>
