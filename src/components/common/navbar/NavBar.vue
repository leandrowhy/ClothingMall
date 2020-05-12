<template>
  <div>
      <nav>
          <slot></slot>
      </nav>
  </div>
</template>

<script>

export default {
    name: "NavBar",
}
</script>

<style scoped>
    nav{
        background: #f6f6f6;
        display: flex;
        width: 100%;
        height: 49px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 3px rgba(100, 100, 100, .2);
    }
</style>