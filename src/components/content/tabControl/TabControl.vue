<template>
  <div class="tab-control">
    <div v-for="(item, index) in contronls" :key="item">
      <span :class="{active : activeCon == index}" @click="thisCon(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      contronls: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        activeCon: 0
      }
    },
    methods: {
      thisCon(index) {
        this.activeCon = index
        this.$emit('tabClick', index)
      }
    },
  }
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  line-height: 47px;
  background: #ffffff;
  font-size: 14px;
  z-index: 5;
}

.tab-control span {
  padding: 0 5px 5px;
}

.active{
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>