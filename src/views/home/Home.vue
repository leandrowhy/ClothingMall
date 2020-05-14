<template>
  <div class="home">
    <top-nav-bar class="home-nav">
      <div slot="conter">购物街</div>
    </top-nav-bar>
    <home-swiper :banners="banners" />
    <HomeRecommend :recommends="recommends" />
    <HomeFeature />
    <TabControl class="tab-control" :titles="['流行','新款','精选']" />
    <ul>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
      <li>内容1</li>
    </ul>
  </div>
</template>

<script>
//子组件
import HomeSwiper from "./components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import HomeFeature from "./components/HomeFeature";
// 公共组件
import TopNavBar from "@common/topnavbar/TopNavBar";
import TabControl from "@content/tabControl/TabControl";
// 数据请求 api
import { getHomeMultidata, getHomeData } from "@request/api/home";
export default {
  name: "Home",
  components: {
    TopNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    // 请求数据
    this.getHomeMultidata();
    // 商品数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page +1
      getHomeData(type,page).then( res => {
        this.goods[type].list = res.data.list
      })
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
