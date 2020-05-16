<template>
  <div v-if="isShow" class="shop-info">
    <p class="shop-title">{{ goods.title }}</p>

    <div class="shop-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <div v-if="isShowPrice">
        <span class="old-price grey">
          <del>{{ goods.oldPrice }}</del>
        </span>
        <span class="discount">{{ goods.discount }}</span>
      </div>
    </div>

    <div class="columns">
      <span>{{ goods.columns[0] }}</span>
      <span class="centen">{{ goods.columns[1] }}</span>
      <span class="right">{{ goods.services[0].name }}</span>
    </div>

    <div class="services">
      <div class="title" v-for="(item,index) in goods.services" :key="index">
        <div>
          <img :src="item.icon" alt />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      goodsinfo: null
    };
  },
  computed: {
    isShow() {
      return this.goods && Object.keys(this.goods).lenght !== 0;
    },
    isShowPrice() {
      return this.goods && this.goods.discount != "";
    }
  }
};
</script>

<style scoped>
.shop-info {
  background-color: #fff;
  margin-bottom: 10px;
}
.services {
  display: flex;
  padding: 20px 0;
  padding-bottom: 25px;
  margin: 0 5px;
  border-top: 2px solid #efefef;
}
.services .title {
  padding-right: 8px;
  text-align: center;
  overflow: hidden;
}
.services .title span {
  font-size: 13px;
  vertical-align: middle;
}
.services img {
  width: 14px;
  vertical-align: middle;
}
.services .right {
  text-align: right;
}
.shop-title {
  color: #000;
  padding: 10px 5px;
  font-size: 16px;
}
.shop-price {
  display: flex;
  position: relative;
  margin-bottom: 20px;
  margin-top: 5px;
  padding-left: 5px;
}
.shop-price span {
  display: inline-block;
  padding-right: 3px;
}
.new-price {
  font-size: 22px;
  color: #e56c76;
}
.old-price {
  color: rgb(165, 158, 158);
  padding-top: 8px;
  padding-left: 5px;
  font-size: 14px;
}
.discount {
  position: absolute;
  background-color: #ea6f79;
  padding: 3px;
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  top: -2px;
}
.columns {
  display: flex;
  font-size: 14px;
  color: rgb(165, 158, 158);
  padding: 0 5px;
  padding-bottom: 10px;
}
.columns span {
  flex: 1;
}
.columns .centen {
  text-align: center;
}
.columns .right {
  text-align: right;
}
</style>
