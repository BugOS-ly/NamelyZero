<script lang="ts">
export default {
  name: 'SearchBar'
}
</script>

<script setup lang="ts"></script>

<template>
  <input id="search-bar" placeholder="Search" />
</template>

<style scoped lang="scss">
#search-bar {
  outline: none;
  width: 70%;
  border-radius: $header_bar_radius;
  background: url('@/assets/images/searching.svg') no-repeat;
  background-position: 6px 6px;
  padding-left: 20px;
  background-color: #35324c;
  color: #fff;
}
</style>
