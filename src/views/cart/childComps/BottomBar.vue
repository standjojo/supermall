<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @changeChecked="changeChecked" :value="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{$store.getters.cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

	export default {
    name: "BottomBar",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
		  CheckButton
    },
    computed: {
		  totalPrice() {
        if (this.cartList.length === 0) {
          return 
        }
        let sum = 0
        this.cartList.forEach(item => {
          if (item.checked) {
            sum += item.price * item.num
          }
        })
        return sum
      },
      isSelectAll() {
        return this.$store.state.cartList.find(item => !item.checked) === undefined;
      }
    },
    methods: {
      changeChecked() {
        // 1.判断是否有未选中的按钮
        let isSelectAll = this.$store.state.cartList.find(item => !item.checked) !== undefined;
        // 2.有未选中的内容, 则全部选中
        this.$store.commit('selectAll', isSelectAll)
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
