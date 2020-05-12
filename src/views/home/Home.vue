<template>
  <div class="home">
    <top-nav-bar class="home-nav">
      <div slot="conter">购物街</div>
    </top-nav-bar>
    <home-swiper :banners="banners"/>
    <HomeRecommend :recommends="recommends"/>
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
import HomeSwiper from "./components/HomeSwiper"
import HomeRecommend from "./components/HomeRecommend"
import HomeFeature from "./components/HomeFeature"
// 公共组件
import TopNavBar from "@common/topnavbar/TopNavBar";
import TabControl from "@content/tabControl/TabControl"

import { getHomeMultidata } from "@request/api/home";
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
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
.home{
  padding-top: 44px;
}
.home-nav{
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
.tab-control{
  position: sticky;
  top:44px
}
</style>
