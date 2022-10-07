<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<script setup lang="ts"></script>

<template>
  <div id="menu">
    <slot />
  </div>
</template>

<style scoped lang="scss">
#menu {
  width: fit-content;
}
</style>
