<template>
  <div>
    <div class="module">
      <group>
        <div class="input-cell">
          <div class="cell-title">手机号码</div>
          <input class="cell-input" type="number" v-model="patPhoneNo">
        </div>
        <div class="input-cell">
          <div class="cell-title">证件类型</div>
          <select class="cell-input" name="certiType" v-model="patIdTypeCode">
            <option v-for="item in certiTypes" :key="item.value" :value="item.value">{{item.text}}</option>
          </select>
        </div>
        <div class="input-cell">
          <div class="cell-title">证件号码</div>
          <input class="cell-input" type="number" v-model="patIdNo">
        </div>
        <datetime title="开始时间" v-model="beginDate" format="YYYY-MM-DD"></datetime>
        <datetime title="结束时间" v-model="endDate" format="YYYY-MM-DD"></datetime>
      </group>
      <div class="button-cell">
        <button class="button" @click="queryPrescriptionList">查询</button>
      </div>
    </div>
    <ul class="tab">
      <li :class="{active: payState}" @click="switchTab(true)">待缴费</li>
      <li :class="{active: !payState}" @click="switchTab(false)">已缴费</li>
    </ul>
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
        <tr v-for="(item, index) in prescriptionList" v-if="(item.payFlg === 'N'&&payState)||(item.payFlg === 'Y'&!payState)" :key="index">
          <td>{{index > 9 ? index : '0' + index}}</td>
          <td>{{item.prescNo}}</td>
          <td>{{item.patName}}</td>
          <td>{{item.prescAmt}}</td>
          <td>{{item.payFlg == 'Y' ? '已缴' : '待缴'}}</td>
          <td>
            <router-link to="/result">
              <button class="btn btn-mini btn-active" @click="checkResult(item)">查看</button>
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
import {dateFormat, getSpecifiedDate} from '../../utils/index'
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
      payState: true,
      patPhoneNo: '',
      patIdNo: '',
      patIdTypeCode: 1,
      certiTypes: [
        {value: 1, text: '身份证'},
        {value: 2, text: '港澳通行证'},
        {value: 3, text: '护照'},
        {value: 4, text: '会员证'}
      ],
      beginDate: dateFormat(getSpecifiedDate(-6)),
      endDate: dateFormat(new Date()),
      prescriptionList: []
    }
  },
  methods: Controller,
  created () {
    this.queryPrescriptionList()
  },
  mounted () {
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      window.close()
    }, false)
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  @import '../../assets/less/form';
  .tab {
    display: flex;
    flex-direction: row;
    li {
      flex: 1;
      height: 0.45rem;
      line-height: 0.45rem;
      font-size: 0.15rem;
      border-bottom: 3px solid @white;
      background: @white;
      &.active {
        border-color: @themeColor;
        color: @themeColor;
      }
    }
  }
  .module2 {
    padding: 0 0.15rem;
    font-size: @fontSizeTable;
  }
</style>
