<template>
  <div class="detail-swiper">
    <swiper class="detail-swiper-box">
      <swiper-item v-for="item in detailSwiper" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'DetailSwiper',
  props: {
    detailSwiper: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
}
</script>

<style scoped>
.detail-swiper-box {
  height: 400px;
}
</style>