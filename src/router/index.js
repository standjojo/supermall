import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Category = () => import('views/category/Category.vue')
const Detail = () => import('views/detail/Detail.vue')

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/home' 
  },
  {
    path: '/home',
    component: Home,
    // meta: {
    //   title: 'supermall'
    // }
  },
  {
    path: '/cart',
    component: Cart,
    // meta: {
    //   title: '购物车'
    // }
  },
  {
    path: '/profile',
    component: Profile,
    // meta: {
    //   title: '我的'
    // }
  },
  {
    path: '/category',
    component: Category,
    // meta: {
    //   title: '分类'
    // }
  },
  {
    path: '/detail',
    component: Detail,
    // meta: {
    //   title: '店铺'
    // }
  }
]

const router = new Router({
  // mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title
//   next();
// })

export default router