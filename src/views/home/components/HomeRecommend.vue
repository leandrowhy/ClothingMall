<template>
  <div class="recommend">
    <ul>
      <li v-for="item in recommends" :key="item.sort">
        <a :href="item.link">
          <img :src="item.image" alt />
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  padding-bottom: 25px;
  border-bottom: 10px solid #eee;
}
.recommend ul{
  display: flex;
}
.recommend li {
  text-align: center;
  list-style: none;
  float: left;
  flex: 1;
  font-size: 13px;
  margin-top: 10px;
}
.recommend li img {
  width: 85%;
  margin-bottom: 10px;
}
</style>
