<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>

<script setup lang="ts"></script>

<template>
  <div id="menu-item" class="clickable">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.clickable {
  // 可点击的
  cursor: pointer;
}

#menu-item {
  margin: 0 auto;
}
</style>
