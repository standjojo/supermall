<template>
  <div class="product-info" v-if="Object.keys(productInfo).length !== 0">
    <div v-for="rule,index in productInfo.sizes[0]" :key="index" class="rule">
      <span>{{rule[0]}}</span>
      <div v-for="i in rule.length - 1" :key="i">{{rule[i]}}</div>
    </div>
    <div v-for="item in productInfo.infos" :key="item.key" class="params">
      <span class="params-key">{{item.key}}</span>
      <span class="params-value-box">
        <div class="params-value">{{item.value}}</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: {
    productInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.product-info {
  padding: 10px 0;
  font-size: 16px;
}

.rule {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
}

.rule div {
  text-align: center;
  flex: 1;
}

.params {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
}

.params-key {
  flex: 3;
}

.params-value-box {
  text-align: left;
  flex: 7;
  color: var(--color-tint);
  display: flex;
  align-items: center;
}

.params-value {
  position: absolute;
}
</style>