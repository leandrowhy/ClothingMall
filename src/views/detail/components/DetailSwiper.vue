<template>
  <swipe v-model="index" class="detail-swipere">
    <swipe-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt />
    </swipe-item>
  </swipe>
</template>

<script>
export default {
  name: "DetailSwiper",
  components: {},
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      index: 0 // two way
    };
  }
};
</script>

<style scoped>
.detail-swipere {
  height: 400px;
}
.detail-swipere img {
  width: 100%;
  margin-top: -10%;
}
</style>
