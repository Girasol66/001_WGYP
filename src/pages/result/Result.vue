<template>
  <div>
    <div class="module">
      <div class="list-title">
        <span class="list-title-item">处方编号：{{orderNo}}</span>
        <span class="list-title-item">缴费状态：{{payFlg}}</span>
      </div>
      <div class="pic-list" v-for="(item, index) in list" :key="index">
        <img :src="item.img ? item.img : img" alt="" class="list-pic">
        <div class="list-info">
          <div class="list-title">{{item.drugName}}</div>
          <div class="list-sub-title">规格：{{item.type}} 数量：{{item.drugCnt}} {{item.drugUnit}}</div>
          <div class="price">¥{{item.drugPrice}}</div>
        </div>
      </div>
    </div>
    <div class="action-area">
      <div class="total-price">合计：¥{{prescAmt}}</div>
      <div class="button" :class="{orange: !hasPaid}" @click="querySelfPayOrder">自付</div>
      <div class="button" :class="{primary: !hasPaid}" @click="queryAnotherPayOrder">代付</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Controller from './Controller'
export default {
  name: 'result',
  data () {
    return {
      hasPaid: false,
      // defaultImg: require('../../assets/images/medicine_default.png') + '"',
      img: require('../../assets/images/medicine_default.png'),
      orderNo: '',
      payFlg: '',
      prescNo: '',
      prescAmt: '',
      list: []
      // list: [
      //   {
      //     name: '立卫克 奥美拉唑肠溶胶囊',
      //     type: '20mgx14粒/瓶',
      //     price: '1.00',
      //     img: 'https://c1.yaofangwang.net/common/upload/medicine/555/555843/7ded6c1a-64d1-44ad-97e8-030d62ca07261909.jpg_300x300.jpg'
      //   },
      //   {
      //     name: '葵花 胃康灵胶囊',
      //     type: '0.4gx12粒x2板/盒',
      //     price: '13.00',
      //     img: 'https://c1.yaofangwang.net/common/upload/medicine/533/533788/ee7901a8-a79e-43e7-bf5f-6b5c1112afcb1244.jpg_300x300.jpg'
      //   },
      //   {
      //     name: '立卫克 奥美拉唑肠溶胶囊',
      //     type: '20mgx14粒/瓶',
      //     price: '1.00',
      //     img: 'https://c1.yaofangwang.net/common/upload/medicine/533/533647/e4febc86-c7d3-4686-a16c-72a77543e85a9931.jpg_300x300.jpg'
      //   },
      //   {
      //     name: '葵花 胃康灵胶囊',
      //     type: '0.4gx12粒x2板/盒',
      //     price: '13.00',
      //     img: 'https://c1.yaofangwang.net/common/upload/medicine/318/318367/c00dd96d-ccc9-4904-b1a7-904e018174b87434.jpg_300x300.jpg'
      //   }
      // ]
    }
  },
  methods: Controller,
  created () {
    // JSON.parse(localStorage.getItem('resultList'))
    console.log(this.$route)
    console.log(this.$route.query)
    this.loadData()
    this.queryOrderPayRes()
    // if (this.$route.query) {}
    // this.orderNo = this.$route.query.orderNo
    // const payFlg = this.$route.query.payFlg
    // this.payFlg = payFlg === 'Y' ? '已缴' : '待缴'
    // this.list = this.$route.query.detail
    // this.prescNo = this.$route.query.prescNo
    // this.prescAmt = this.$route.query.prescAmt
  },
  watch: {
    '$route': function () {
      this.loadData()
    }
    // loadData: function () {
    //   let query = this.$route.query
    //   if (JSON.stringify(query) === '{}') {
    //     this.list = JSON.parse(sessionStorage.getItem('resultList'))
    //     this.prescNo = JSON.parse(sessionStorage.getItem('resultList'))
    //     this.prescAmt = JSON.parse(sessionStorage.getItem('resultList'))
    //   } else {
    //     const payFlg = this.$route.query.payFlg
    //     this.payFlg = payFlg === 'Y' ? '已缴' : '待缴'
    //     this.orderNo = this.$route.query.orderNo
    //     this.list = this.$route.query.detail
    //     this.prescNo = this.$route.query.prescNo
    //     this.prescAmt = this.$route.query.prescAmt
    //   }
    // }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';
  .module {
    background: @white;
  }
  .list-title {
    display: flex;
    flex-direction: row;
    color: #999;
    .list-title-item {
      height: 0.44rem;
      padding: 0 0.15rem;
      line-height: 0.44rem;
      &:first-child {
        flex: 1;
        text-align: left;
      }
    }
  }
  .pic-list {
    display: flex;
    flex-direction: row;
    padding: 0.05rem 0.15rem;
    position: relative;
    .list-pic {
      width: 0.9rem;
      height: 0.9rem;
    }
    .list-info {
      flex: 1;
      text-align: left;
      padding: 0.15rem 0.21rem 0.1rem;
      .list-title {
        color: #333;
        font-size: 0.12rem;
        line-height: 0.2rem;
      }
      .list-sub-title {
        color: #999;
        font-size: 0.11rem;
        line-heigt: 0.2rem;
      }
      .price {
        color: #ff4606;
        font-size: 0.15rem;
        line-height: 0.3rem;
        font-weight: bold;
      }
    }
    &:before {
      content: ' ';
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      position: absolute;
      left: 0.15rem;
      right: 0;
      top: 0;
    }
  }
  .action-area {
    display: flex;
    flex-direction: row;
    line-height: 0.44rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .total-price {
      background: #fff;
      flex: 1;
    }
    .button {
      width: 1rem;
      height: .44rem;
      color: @buttonFontColor;
      font-size: .18rem;
      background: #ccc;
    }
    .orange {
      background: #ff6e00;
    }
    .primary {
      background: #108ee9;
    }
  }
</style>
