<template>
  <div>
    <div class="module">
      <div class="cell-box">
        <div class="cell-title">手机号码</div>
        <div class="input-box">
          <input type="number" class="input" v-model="patPhoneNo">
        </div>
      </div>
      <div class="cell-box">
        <div class="cell-title">证件类型</div>
        <div class="input-box">
          <select class="input" name="certiType" v-model="patIdTypeCode">
            <option v-for="item in certiTypes" :key="item.value" :value="item.value">{{item.text}}</option>
          </select>
          <!--<select type="number" class="input"></select>-->
        </div>
      </div>
      <div class="cell-box">
        <div class="cell-title">证件号码</div>
        <div class="input-box">
          <input type="number" class="input" v-model="patIdNo">
        </div>
      </div>
      <div class="flex-box">
        <div class="flex-item cell-box">
          <div class="cell-title">开始时间</div>
          <div class="input-box">
            <div class="datetime-box">
              <datetime v-model="beginDate"></datetime>
              <span class="datetime-icon"></span>
            </div>
          </div>
        </div>
        <div class="flex-item cell-box">
          <div class="cell-title">结束时间</div>
          <div class="input-box">
            <div class="datetime-box">
              <datetime v-model="endDate"></datetime>
              <span class="datetime-icon"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="button-box">
        <button class="button" @click="queryPrescriptionList">查询</button>
      </div>
    </div>
    <div class="module module2">
      <x-table :content-bordered="false" :cell-bordered="false">
        <tr>
          <td>序号</td>
          <td>处方号</td>
          <td>姓名</td>
          <td>金额</td>
          <td>缴费状态</td>
          <td>操作</td>
        </tr>
        <tbody>
        <tr v-for="(item, index) in prescriptionList" :key="index">
          <td>{{index > 9 ? index : '0' + index}}</td>
          <td>{{item.prescNo}}</td>
          <td>{{item.patName}}</td>
          <td>{{item.prescAmt}}</td>
          <td>{{item.payFlg == 'Y' ? '已缴' : '待缴'}}</td>
          <td>
            <router-link to="/result">
              <button class="btn btn-mini btn-active" @click="checkResult(item.id)">查看</button>
            </router-link>
          </td>
        </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Group, XTable, XButton, Datetime } from 'vux'
import Controller from './Controller'
export default {
  name: 'precription-query',
  components: {
    Group,
    XTable,
    XButton,
    Datetime
  },
  data () {
    return {
      patPhoneNo: '13812818188',
      patIdNo: '320123133333',
      patIdTypeCode: 2,
      certiTypes: [
        {value: 1, text: '身份证'},
        {value: 2, text: '港澳通行证'},
        {value: 3, text: '护照'}
      ],
      beginDate: '2019-03-01',
      endDate: '2019-03-01',
      prescriptionList: []
    }
  },
  methods: Controller,
  created () {
    this.queryPrescriptionList()
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
    .input, .datetime-box {
      width: 100%;
      height: 0.35rem;
      line-height: 0.35rem;
      text-align: left;
      padding: 0 0.13rem;
      color: @fontColor;
      background: @inputBg;
      border: @border;
      border-radius: @borderRadius;
    }
    .datetime-box {
      padding-right: 0;
      line-height: 0.35rem;
      text-align: left;
      position: relative;
      .datetime-icon {
        position: absolute;
        right: 0.005rem;
        top: 0;
        width: 0.415rem;
        height: 0.33rem;
        display: inline-block;
        background: #f9fcff;
        border-radius: 0 @borderRadius @borderRadius 0;
        background-image: url("../../assets/images/date-icon.png");
        background-size: 0.2rem;
        background-position: center;
        background-repeat: no-repeat;
      }
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
