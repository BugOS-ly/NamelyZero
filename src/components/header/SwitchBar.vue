<!-- 切换组件，用于切换主题等 -->

<script lang="ts">
export default {
  name: 'SwitchBar'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
</script>

<template>
  <div id="switch-bar">
    <SymbolIcon name="yitian" size="12px" />
  </div>
</template>

<style scoped lang="scss">
#switch-bar {
  display: flex;
  align-items: center;
  width: 25%;
  padding: 0 1%;
  background-color: #362b55;
  border-radius: $header_bar_radius;
  color: #9893b8;
}
</style>
