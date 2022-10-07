<script lang="ts">
export default {
  name: 'TradeBar'
}
</script>

<script setup lang="ts">
import TradeHeader from './TradeHeader.vue'
import TradeHistory from '@/components/trade/history/History.vue'
</script>

<template>
  <div id="trade-bar">
    <TradeHeader />
    <TradeHistory />
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';

#trade-bar {
  height: $trade_bar_height;
}
</style>
