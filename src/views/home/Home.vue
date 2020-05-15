<template>
  <div class="home">
    <top-nav-bar class="home-nav">
      <div slot="conter">购物街</div>
    </top-nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <Scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <HomeRecommend :recommends="recommends" />
      <HomeFeature />
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" v-show="!isTabFixed" />
      <goods-list :goods="showGoods" class="goodslist" />
    </Scroll>
    <BackTop class="backTop" @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
//子组件
import HomeSwiper from "./components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import HomeFeature from "./components/HomeFeature";
// 公共组件
import Scroll from "@common/scroll/Scroll";
import TopNavBar from "@common/topnavbar/TopNavBar";
import TabControl from "@content/tabControl/TabControl";
import GoodsList from "@content/goodslist/GoodsList";
import BackTop from "@content/backtop/BackTop";
// 数据请求 api
import { getHomeMultidata, getHomeData } from "@request/api/home";
// utils工具
import { debounce } from "@utils/utils";
export default {
  name: "Home",
  components: {
    TopNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    console.log(this.saveY);

  },
  created() {
    // 请求数据
    this.getHomeMultidata();
    // 商品数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("itemImgLoad", () => {
      // this.$refs.scroll.refresh()
      refresh();
    });
  },
  methods: {
    // 时间监听部分
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 返回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 返回顶部显示与隐藏
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 数据加载更多
    loadMore() {
      this.getHomeData(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44
    },

    // 网络请求部分
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.refresh();
      });
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  position: relative;
  /* overflow: hidden; */
  /* height: 100vh; */
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
.scroll {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.backTop {
  position: fixed;
  right: 5px;
  bottom: 53px;
  z-index: 999;
}
</style>
