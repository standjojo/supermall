<template>
  <div class="goods-list-item" @click="itemClick">
    <img @load="imgLoad" :src="showImg" alt=""/>
    <div class="goods-info">
      <div>{{ goodsItem.title }}</div>
      <span>{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  },
  computed: {
    showImg() {
      if (this.goodsItem.show) {
        return this.goodsItem.show.img
      }
      if (this.goodsItem.img) {
        return this.goodsItem.img
      }
      return this.goodsItem.image
    }
  },
};
</script>

<style scoped>
.goods-list-item {
  width: 45%;
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
}

.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-info div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 3px 0;
}

.goods-info .collect {
  position: relative;
  margin-left: 20px;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>