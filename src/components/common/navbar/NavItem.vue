<template>
  <div class="nav-item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="colorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#FF5777"
    }
  },
  methods: {
    btnClick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      colorStyle() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    }
};
</script>

<style scoped>
.nav-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.nav-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>