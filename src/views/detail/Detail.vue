<template>
  <div class="detail">
    <DetailNabBar class="detail-nav" />
    <!-- @scroll="contentScroll"
      @pullingUp="loadMore" -->
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true">

      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shopInfo" />

     <div style="background: #fff;height=1000px">
        <ul>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
        <li>sgs</li>
      </ul>
     </div>

    </scroll>
  </div>
</template>

<script>
import DetailNabBar from "./components/DetailNavBar";
import DetailSwiper from "./components/DetailSwiper";
import DetailBaseInfo from "./components/DetailBaseInfo";
import DetailShopInfo from "./components/DetailShopInfo"

import Scroll from "@common/scroll/Scroll";

import { getDateil, GoodsInfo, ShopInfo } from "@request/api/detail";
export default {
  name: "Detail",
  components: {
    DetailNabBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null,
      shopInfo : null
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    // 请求数据
    this.getDateil();
  },
  mounted(){
    // console.log(this.$refs.scroll.scroll);

  },
  methods: {
    getDateil() {
      getDateil(this.iid).then(res => {
        const data = res.result;
        // console.log(data);
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        this.shopInfo = new ShopInfo(data.shopInfo)
        console.log(this.shopInfo);

        document.title = "商品详情 - " + this.goods.title;
      });
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #eeeeee;
}
.detail-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #fff;
}
.scroll {
  height: 100vh;
  /* height: calc(100vh - 44px); */
  overflow: hidden;
}
</style>
