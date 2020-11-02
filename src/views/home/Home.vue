<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 滚动到下方显示这个tab-control -->
    <tab-control
        :contronls="tabControl"
        @tabClick="tabClick"
        class="tab-control"
        ref="tabControl1"
        :class="{beScroll : isCover, hidden: !isCover}"
      ></tab-control>
    <!-- better-scroll -->
    <scroll
      @scrollPosition="scrollPosition"
      @pullingUp="loadMore"
      :probeType="3"
      class="wrapper"
      ref="scroll"
      :pullUpLoad="true"
    >
      <!-- 轮播图 -->
      <home-swiper class="home-swiper" :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
      <!-- 轮播图下方列表 -->
      <recommend-view
        class="home-recommend"
        :recommends="recommends"
      ></recommend-view>
      <div class="grayPlace"></div>
      <!-- 本周流行 -->
      <feature-view class="home-feature"></feature-view>
      <!-- 本周流行下方分类控件 -->
      <tab-control
        :contronls="tabControl"
        @tabClick="tabClick"
        class="tab-control"
        ref="tabControl2"
      ></tab-control>
      <!-- 商品展示 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { itemListenerMixin } from 'common/mixin'

export default {
  name: "Home",
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      dKeywords: [],
      keywords: [],
      tabControl: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      backTopShow: false,
      tabOffsetTop: 0,
      isCover: false
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  methods: {
    // 事件监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.activeCon = index
      this.$refs.tabControl2.activeCon = index
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // 轮播图数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.dKeywords = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 回到顶部图标显示隐藏
    scrollPosition(position) {
      this.backTopShow = (-position.y) > 1000
      this.isCover = (-position.y) > this.tabOffsetTop - 47
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    // 获取tabControl的offsetTop
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 图片加载完成事件监听
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");
  },
  deactivated() {
    this.$bus.$off('itemImageLoad', this.imgListener)
  },
};
</script>

<style scoped>
.home-nav {
  background: var(--color-tint);
  color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 10;
}

.hidden {
  visibility: hidden;
}

.beScroll {
  visibility: visible;
  position: sticky;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 11;
}

.home-swiper {
  position: relative;
  z-index: 11;
}

.home-recommend {
  background: #ffffff;
  margin: -3px 0 0 0;
  padding: 10px 0 15px;
}

.grayPlace {
  height: 10px;
  background: #eeeeee;
}
.wrapper {
  margin-top: -3px;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
