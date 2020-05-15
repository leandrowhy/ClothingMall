<template>
  <div>
    <DetailNabBar/>
    <DetailSwiper :topImages="topImages" />
    我是商品详情页
    <p>{{iid}}</p>
  </div>
</template>

<script>
import DetailNabBar from "./components/DetailNavBar";
import DetailSwiper from "./components/DetailSwiper"

import {getDateil} from "@request/api/detail"
export default {
  name: "Detail",
  components: {
    DetailNabBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    // 请求数据
    this.getDateil()
  },
  methods: {
    getDateil() {
      getDateil(this.iid).then( (res) => {
        console.log(res.result);

        this.topImages = res.result.itemInfo.topImages
      })
    }
  }
};
</script>

<style scoped>
</style>
