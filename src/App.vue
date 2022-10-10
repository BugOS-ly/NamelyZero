<script setup lang="ts">
import HeaderBar from '@/layout/HeaderBar.vue'
import NavBar from '@/layout/NavBar.vue'

import { useRoute } from 'vue-router'
</script>

<template>
  <HeaderBar />
  <div id="horizontal-blank-bar"></div>
  <NavBar />
  <div id="vertical-blank-bar"></div>
  <div id="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="useRoute().meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!useRoute().meta.keepAlive" />
    </router-view>
  </div>
</template>

<style scoped lang="scss">
// horizontal-blank-bar 横向空白框 负责隔断头部菜单栏和其余部分
#horizontal-blank-bar {
  height: $horizontal_blank_bar_height;
}

// vertical-blank-bar 纵向空白框 负责隔断左侧菜单栏和主体部分
#vertical-blank-bar {
  float: left;
  width: $vertical_blank_bar_width;
  height: $vertical_blank_bar_height;
}

#main {
  float: right;
  width: $home_width;
  height: $home_height;
}
</style>
