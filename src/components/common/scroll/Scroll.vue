<template>
  <div class="warper" ref="warper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 创建scroll对象
    this.scroll = new Scroll(this.$refs.warper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }

    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 移动滚动条位置
    scrollTo(x, y, time = 600) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 继续监听上拉事件
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 重新计算内容可滑动区域
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("-----refresh-----");
    },
    // 计算y值
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
};
</script>

<style scoped>
</style>
