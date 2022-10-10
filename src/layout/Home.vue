<script lang="ts">
export default {
  name: 'Home'
}
</script>

<script setup lang="ts">
import TrendBar from '@/components/trend/Trend.vue'
import TradeBar from '@/components/trade/Trade.vue'
import SubjectBar from '@/components/subject/SubjectBar.vue'
</script>

<template>
  <div id="home">
    <SubjectBar />
    <div id="general-map">
      <TrendBar />
      <TradeBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
#home {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

#general-map {
  width: 60.5%;
}
</style>
