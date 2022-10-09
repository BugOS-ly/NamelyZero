<script lang="ts">
export default {
  name: 'LogoBar'
}
</script>

<script setup lang="ts">
// const logo: string = 'src/assets/images/logo.svg'
</script>

<template>
  <div id="logo-bar">
    <img src="@/assets/images/logo.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
#logo-bar {
  transform: translateX(-10%);
  cursor: pointer;
}
</style>
