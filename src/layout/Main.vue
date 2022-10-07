<script lang="ts">
export default {
  name: 'Main'
}
</script>

<script setup lang="ts">
import TrendBar from '@/components/trend/Trend.vue'
import TradeBar from '@/components/trade/Trade.vue'
import SubjectBar from '@/components/subject/SubjectBar.vue'
</script>

<template>
  <div id="main">
    <SubjectBar />
    <div id="general-map">
      <TrendBar />
      <TradeBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
#main {
  float: right;
  display: flex;
  justify-content: space-between;
  width: $main_width;
  height: $main_height;

  #general-map {
    width: 60.5%;
  }
}
</style>
