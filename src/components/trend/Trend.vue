<script lang="ts">
export default {
  name: 'TrendBar'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
import Menu from '@/components/menu/Menu.vue'
import MenuItem from '@/components/menu/MenuItem.vue'
</script>

<template>
  <div id="trend-bar">
    <Menu class="trend-menu">
      <MenuItem title="瞄准">
        <SymbolIcon name="icon-test" size="10px" />
      </MenuItem>
      <MenuItem title="美元">
        <SymbolIcon name="meiyuan" size="12px" />
      </MenuItem>
      <MenuItem title="复制">
        <SymbolIcon name="fuzhi" size="10px" />
      </MenuItem>
    </Menu>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';

#trend-bar {
  height: $trend_bar_height;
  padding: 6px;
  border-radius: $trend_bar_radius;
  background-color: #252238;

  .trend-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 6.5%;
    height: 35%;
    border-radius: 10px;
    background-color: #2e2a43;
  }
}
</style>
