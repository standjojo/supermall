import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state, payload) {
      if (state.cartList.find(item => item.iid === payload.iid) === undefined) {
        payload.checked = true
        payload.num = 1
        state.cartList.push(payload)
      } else {
        state.cartList.forEach((item) => {
          if (item.iid === payload.iid) {
            item.num ++
          }
        })
      }
    },
    changeChecked(state, payload) {
      state.cartList.forEach(item => {
        if (item.iid === payload) {
          item.checked = !item.checked
        }
      })
    },
    selectAll(state, payload) {
      state.cartList.forEach(item => {
        item.checked = payload
      })
    }
  },
  getters: {
    cpuCartCount(state) {
      let sum = 0
      state.cartList.forEach(item => {
        sum += item.num
      })
      return sum
    }
  }
})



export default store