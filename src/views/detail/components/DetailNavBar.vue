<template>
  <div>
    <nav-bar>
      <div slot="left" @click="goBack" class="back">
        <img src="~@assets/img/common/back.svg" alt />
      </div>
      <div slot="conter" class="title">
        <div
          v-for="(item,index) in title"
          :key="index"
          @click="itemClick(index)"
          :class="{active: index === currtentIndex}"
        >{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@common/topnavbar/TopNavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currtentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currtentIndex = index
    },
    goBack() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.title div{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin-top: 13px;
  width: 30%;
}
</style>
