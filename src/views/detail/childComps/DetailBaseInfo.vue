<template>
  <div class="detail-base-info" v-if="Object.keys(baseInfo).length !== 0">
    <div class="baseInfo-title">{{baseInfo.title}}</div>
    <div class="price">
      <span>{{baseInfo.newPrice}}</span>
      <span>{{baseInfo.oldPrice}}</span>
      <span :style="disColor">{{baseInfo.discount}}</span>
    </div>
    <div class="columns">
      <div>{{baseInfo.columns[0]}}</div>
      <div>{{baseInfo.columns[1]}}</div>
      <div>{{baseInfo.services[0].name}}</div>
    </div>
    <div class="services">
      <div v-for="item in (baseInfo.services.length - 1)" :key="item">
        <img :src="baseInfo.services[item].icon" alt="">
        <span>{{baseInfo.services[item].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {

        }
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {
    disColor() {
      return  `background-color: ${this.baseInfo.discountBgColor};`
    }
  },
}
</script>

<style scoped>
.baseInfo-title {
  font-size: 18px;
  color: var(--color-text);
  font-weight: bold;
}

.price {
  margin: 10px 0 20px;
  position: relative;
}

.price span:nth-child(1) {
  font-size: 28px;
  color: var(--color-tint);
}

.price span:nth-child(1) {
  font-size: 28px;
  color: var(--color-tint);
}

.price span:nth-child(2) {
  font-size: 16px;
  color: #999999;
  margin: 0 5px;
  text-decoration: line-through;
}

.price span:nth-child(3) {
  font-size: 14px;
  color: #ffffff;
  padding: 2px 4px;
  border-radius: 8px;
  position: absolute;
  top: 0;
}

.columns {
  display: flex;
  width: 100%;
  font-size: 14px;
  color: #999999;
  justify-content: space-between;
}

.services {
  display: flex;
  font-size: 14px;
  color: #000000;
  justify-content: space-between;
  padding: 20px 0 20px;
  margin-top: 10px;
  border-top: 1px solid #F3F3F3;
}

.services div img {
  width: 16px;
  vertical-align: middle;
}
</style>