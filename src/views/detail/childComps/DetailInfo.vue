<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="start"><span></span></div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="end"><span></span></div>
    <div v-for="item in detailInfo.detailImage" :key="item.key">
      <h2 class="detail-title">{{item.key}}</h2>
      <div v-for="imgs in item.list" :key="imgs" class="detail-images">
        <img :src="imgs" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('detailImageLoad')
    }
  },
}
</script>

<style scoped>
.detail-info {
  margin-top: 20px;
  position: relative;
}

.desc {
  font-size: 14px;
  padding: 20px 0 0;
}

.start {
  position: absolute;
  width: 30vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 10px 0;
}

.start span {
  position: absolute;
  bottom: -2px;
  display: inline-block;
  height: 5px;
  width: 5px;
  background: #000000;
}

.end {
  position: absolute;
  right: 0;
  width: 30vw;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin: 10px 0;
}

.end span {
  position: absolute;
  bottom: -2px;
  right: 0;
  display: inline-block;
  height: 5px;
  width: 5px;
  background: #000000;
}

h2.detail-title {
  font-size: 16px;
  color: #333333;
  margin: 20px 0;
}

.detail-images img {
  width: 100%;
}
</style>