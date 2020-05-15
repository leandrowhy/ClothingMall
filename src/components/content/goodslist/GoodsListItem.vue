<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goods.show.img" @load="itemImgLoad" />
    <div class="goods-info">
      <p class="item-title">{{ goods.title }}</p>
      <span class="price">￥{{ goods.price }}</span>
      <span class="cfav">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemImgLoad() {
      this.$bus.$emit("itemImgLoad")
    },
    itemClick() {
      this.$router.push("/detail/" + this.goods.iid)
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 10px;
  width: 46%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  /* width: 48%; */
}
.goods-info .item-title{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-info .price{
  color: var(--color-tint);
}
.goods-info span{
  display: inline-block;
  padding: 0 5px;
}
.goods-info .cfav::before{
  display: inline-block;
  content: "";
  width: 14px;
  height: 14px;
  background: url("~@assets/img/common/collect.svg") 0 0/14px 16px;
}
</style>
