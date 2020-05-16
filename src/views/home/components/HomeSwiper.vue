<template>
  <swipe v-model="index" :autoplayTime="3000" :speed="500" class="home-swipere">
    <swipe-item v-for="(item,index) in banners" :key="index">
      <img :src="item.image" @load="imageLoad" />
    </swipe-item>
  </swipe>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      index: 0
    };
  },
  components: {},
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
.home-swipere {
  clear: both;
}
.home-swipere img {
  width: 100%;
}
</style>
