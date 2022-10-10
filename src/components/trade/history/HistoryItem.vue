<script lang="ts">
export default {
  name: 'TradeHistoryItem'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
import { HistoryItemProps, Trend } from './History'

defineProps<{
  props: HistoryItemProps
}>()
</script>

<template>
  <div id="trade-history-item">
    <span id="date">{{ props.date }}</span>
    <span id="price-trend" class="center-vertically">
      <SymbolIcon name="meiyuan" size="9px" color="#e0deeb" />
      {{ props.price }}
      <SymbolIcon
        v-if="props.trend === Trend.rise"
        name="rise-copy"
        size="5px"
      />
      <SymbolIcon v-else name="decline-copy" size="5px" />
    </span>
    <span id="serialNumber" class="center-vertically">
      <SymbolIcon name="fuzhi" size="8px" class="clickable" />
      {{ props.serialNumber }}
    </span>
    <span><SymbolIcon name="share" size="9px" color="#6b6787" /></span>
  </div>
</template>

<style scoped lang="scss">
@import '../style.scss';

.clickable {
  cursor: pointer;
}

.center-vertically {
  display: flex;
  align-items: center;
}

#trade-history-item {
  &:hover {
    background-color: #3b3854;
  }

  background-color: #2e2b43;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: $trade_history_item_radius;
  height: $trade_history_item_height;

  #date,
  #price-trend,
  #serialNumber {
    width: 25%;
  }
}
</style>
