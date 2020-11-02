<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left">
        <img src="~assets/img/common/back.svg" @click="backHome" class="back" alt="">
      </div>
      <div slot="center" class="detail-title">
        <div v-for="(item, index) in detailTitle" 
             :key="item" 
             :class="{isActive: isActive == index}"
             @click="thisTitle(index)"
             >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNav',
  props: {
    isActive: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      detailTitle: ['商品', '参数', '评论', '推荐'],
      active: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backHome() {
      this.$router.back()
    },
    thisTitle(index) {
      this.$emit('thisTitle', index)
    }
  },
  updated() {
    
  },
  
}
</script>

<style scoped>
.detail-title {
  display: flex;
  justify-content: space-around;
}

.back {
  vertical-align: middle;
}

.isActive {
  color: var(--color-tint);
}
</style>