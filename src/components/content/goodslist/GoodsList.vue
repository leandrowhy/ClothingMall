<template>
  <div class="goods">
    <list-item v-for="(item,index) in goods" :key="index" :goods="item" />
  </div>
</template>

<script>
import ListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    ListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
