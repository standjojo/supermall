import {debounce} from 'common/untils';
import {POP, NEW, SELL} from "./const";

export const itemListenerMixin = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    // 图片加载完成事件监听
    const refresh = debounce(this.$refs.scroll.refresh);
    this.imgListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.imgListener);
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}