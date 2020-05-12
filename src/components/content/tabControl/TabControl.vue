<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      :class="{active: index === currentIndex}"
      @click="activeClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.tab-control {
  background-color: #fff;
  display: flex;
  width: 100%;
  /* padding: 0 ; */
}
.tab-control div {
  float: left;
  flex: 1;
  text-align: center;
  height: 40px;
  font-size: 15px;
  display:flex;
  align-items: center;
  justify-content:center;
}
.tab-control span{
  display: inline-block;
  padding: 5px;
}
.tab-control .active {
  color: var(--color-high-text);
}
.tab-control .active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
