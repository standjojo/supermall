<template>
  <div id="recommend-view" >
    <div v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
#recommend-view {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  text-align: center;
}

#recommend-view img {
  width: 68px;
}
</style>