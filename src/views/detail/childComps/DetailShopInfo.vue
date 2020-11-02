<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-params">
      <div class="shop-self">
        <div>
          <p>{{allSells}}</p>
          <span>总销量</span>
        </div>
        <div>
          <p>{{shopInfo.goodsCount}}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-comm">
        <div v-for="item in shopInfo.score" :key="item.name">
          <span>{{item.name}}</span>
          <span :style="item.isBetter ? 'color: #FB5552;' : 'color: #658133;'">{{item.score}}</span>
          <span :style="item.isBetter ? 'background: #FB5552;' : 'background: #658133;'">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="in-shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    allSells() {
      if (Object.keys(this.shopInfo).length !== 0) {
        let sell = (this.shopInfo.sells / 10000).toFixed(1)
        return sell + '万'
      }
      return ''
    }
  },
}
</script>

<style scoped>
.shop-info {
  padding-bottom: 30px;
}

.shop {
  margin: 35px 0 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
}

.shop img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 10px;
}

.shop-params {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop-self {
  display: flex;
  text-align: center;
  color: #000000;
  width: 50%;
  justify-content: space-around;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

.shop-self div p {
  font-size: 25px;
  margin-bottom: 10px;
}

.shop-self div span {
  font-size: 14px;
}

.shop-comm {
  position: relative;
  width: 45%;
  color: #000000;
  display: flex;
  flex-wrap: wrap;
}

.shop-comm div {
  width: 100%;
  margin: 8px 0;
}

.shop-comm div span:nth-child(2) {
  margin-left: 30px;
}

.shop-comm div span:nth-child(3) {
  position: absolute;
  right: 0;
  color: #ffffff;
  padding: 3px;
  border-radius: 50%;
  text-align: right;
  transform: translateY(-3px);
}

.in-shop {
  display: block;
  font-size: 18px;
  width: 180px;
  line-height: 35px;
  text-align: center;
  border-radius: 5px;
  color: #4E4C4A;
  background: #F1F5F9;
  margin: 10px auto 0;
}
</style>