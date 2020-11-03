<template>
  <div class="detail">
    <detail-nav class="detail-nav" @thisTitle="thisTitle" :isActive="isActive"></detail-nav>
    <scroll class="wrapper" ref="scroll" :probeType="3" @scrollPosition="scrollPosition">
      <detail-swiper :detailSwiper="detailSwiper"></detail-swiper>
      <div class="info">
        <detail-base-info :baseInfo="baseInfo"></detail-base-info>
        <div class="grayPlace"></div>
        <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
        <div class="grayPlace"></div>
        <detail-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></detail-info>
        <div class="grayPlace"></div>
        <product-info ref="params" :productInfo="productInfo"></product-info>
        <detail-comments ref="comment" :commentInfo="commentInfo"></detail-comments>
        <goods-list class="detail-goods-list" ref="recommend" :goods="recommendInfo"></goods-list>
      </div>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import BackTop from "components/content/backTop/BackTop";
import GoodsList from 'components/content/goods/GoodsList'

import DetailNav from './childComps/DetailNav'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps//DetailShopInfo'
import DetailInfo from './childComps/DetailInfo'
import ProductInfo from './childComps//ProductInfo'
import DetailComments from './childComps/DetailComments'
import DetailBottomBar from './childComps/DetailBottomBar'

import { detailData, baseInfo, shopInfo, productInfo, recommend } from 'network/detail'
import { itemListenerMixin } from 'common/mixin'
import { debounce } from 'common/untils'

export default {
  name: 'Detail',
  mixins: [ itemListenerMixin ],
  data() {
    return {
      iid: '',
      detailSwiper: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      productInfo: {},
      commentInfo: {},
      recommendInfo: [],
      refershDetailImage: null,
      themeTopYs: [],
      getThemeTopYs: null,
      isActive: 0,
      backTopShow: false
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailInfo,
    ProductInfo,
    DetailComments,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  methods: {
    // 获取详情页数据
    detailData(id) {
      detailData(id).then(res => {
        this.detailSwiper = res.result.itemInfo.topImages
        // 商品基本信息
        this.baseInfo = new baseInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        // 店铺信息
        this.shopInfo = new shopInfo(res.result.shopInfo)
        // 商品图片展示信息
        this.detailInfo = res.result.detailInfo
        // 商品参数信息
        this.productInfo = new productInfo(res.result.itemParams.info, res.result.itemParams.rule)
        // 评论信息
        if (res.result.rate) {
          this.commentInfo = res.result.rate.list[0]
        }
      })
    },
    // 获取店铺中的推荐模块信息
    recommend() {
      recommend().then(res => {
        this.recommendInfo = res.data.list
      })
    },
    // 监听详情页面图片加载完成
    detailImageLoad() {
      debounce(this.refershDetailImage)
      this.getThemeTopYs()
      
    },
    // 点击标题跳转位置
    thisTitle(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    },
    // 滑动改变标题选中状态
    scrollPosition(position) {
      let themeTopYs = this.themeTopYs.filter(y => {
        return -y >= position.y
      })
      let titleY = themeTopYs[themeTopYs.length - 1] || 0
      this.isActive = this.themeTopYs.indexOf(titleY)
      this.backTopShow = (-position.y) > 1000
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 加入购物车
    addToCart() {
      // 添加购物车需要展示的信息
      const product = {}
      product.image = this.detailSwiper[0]
      product.title = this.baseInfo.title
      product.price = this.baseInfo.realPrice
      product.iid = this.iid
      this.$store.commit('addToCart', product)
    }
  },
  created() {
    this.iid = this.$route.query.iid
    this.detailData(this.iid)
    this.recommend()
  },
  mounted() {
    this.refershDetailImage = this.$refs.scroll.refresh()
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    })
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.imgListener)
  },
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 11;
  background: #ffffff;
}

.wrapper {
  height: calc(100vh - 102px);
  overflow: hidden;
}

.info {
  padding: 10px 10px 0;
}

.detail-nav {
  position: sticky;
  top: 0px;
  z-index: 12;
  background: #ffffff;
}

.grayPlace {
  position: absolute;
  left: 0;
  height: 3px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.1);
}

.detail-goods-list {
  margin-top: 20px;
}
</style>