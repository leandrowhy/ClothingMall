<template>
  <div>
    <nav-bar>
      <!-- path 跳转路径   activeColor 活跃状态字体颜色 -->
      <nav-item path="/home">
        <img slot="item-icon" src="~@assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~@assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </nav-item>
      <nav-item path="/category">
        <img slot="item-icon" src="~@assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="~@assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">分类</div>
      </nav-item>
      <nav-item path="/shopcart">
        <img slot="item-icon" src="~@assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="~@assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="item-text">购物车</div>
      </nav-item>
      <nav-item path="/profile">
        <img slot="item-icon" src="~@assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="~@assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </nav-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@common/navbar/NavBar"
import NavItem from "@common/navbar/NavItem";
export default {
  name: "TabBar",
  components: {
    NavBar,
    NavItem
  }
};
</script>

<style scoped>
</style>
