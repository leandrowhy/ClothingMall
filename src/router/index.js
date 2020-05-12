import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: "首页 - 全球最大的网络购物平台"
    }
  },
  {
    path: '/shopcart',
    component: Cart,
    meta:{
      title: "购物车 - 全球最大的网络购物平台"
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title: "分类 - 全球最大的网络购物平台"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title: "我的 - 全球最大的网络购物平台"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.afterEach((to, from) => {
//   document.title = to.matched[0].meta.title
//   from
// })
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
