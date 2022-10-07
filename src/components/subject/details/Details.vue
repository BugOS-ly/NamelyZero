<script lang="ts">
export default {
  name: 'Details'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
import { reactive } from 'vue'
import { detailsItemProps } from './Details'
import DetailsItem from './DetailsItem.vue'

// 左侧图标的颜色
// const iconColors: string = ['#f3768d', '#09ddff', '#d069ff']

// 左侧图标的背景色
// const iconBackgroundColors: string = ['#4d3e59', '#374465', '#443c65']

const items = reactive<detailsItemProps[]>([
  { iconName: 'sigma', description: 'Total Liquidity', value: 2603805.5 },
  { iconName: 'zhexiantu', description: 'Daily Volume', value: 2372139.74 },
  { iconName: 'sigma', description: 'Polled BSC', value: 1200.6 },
  { iconName: 'zhexiantu', description: 'Pooled Cake', value: 271.35 },
  { iconName: 'sigma', description: 'Total Liquidity', value: 2603805.5 },
  { iconName: 'zhexiantu', description: 'Daily Volume', value: 2372139.74 },
  { iconName: 'sigma', description: 'Polled BSC', value: 1200.6 },
  { iconName: 'zhexiantu', description: 'Pooled Cake', value: 271.35 }
])
</script>

<template>
  <div id="details">
    <div id="header">
      <div id="current-price">
        983.47520<SymbolIcon name="meiyuan" size="12px" color="#e0deeb" />
      </div>
      <div id="other">
        <span>0.2498488</span>
        <span id="day-gradient">
          24H: +5.74
          <SymbolIcon name="rise-copy" size="6px" />
        </span>
      </div>
    </div>
    <div id="items">
      <DetailsItem v-for="(item, index) in items" :key="index" :props="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../style.scss';

#details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $details_height;
  padding: 6% 0;

  #header {
    height: $details_header_height;

    #current-price {
      height: 66%;
      font-size: 16px;
    }

    #other {
      font-size: 6px;
      color: #8b87aa;

      #day-gradient {
        float: right;
      }
    }
  }

  #items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: $details_items_height;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
