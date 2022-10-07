<script lang="ts">
export default {
  name: 'TradeHeader'
}
</script>

<script setup lang="ts">
import Dropdown from '@/components/dropdown/Dropdown.vue'
import DropdownItem from '@/components/dropdown/DropdownItem.vue'
import { reactive, ref } from 'vue'

const options = reactive<string[]>([
  'Trade',
  'item 1',
  'item 22',
  'item 333',
  'item 4444',
  'item 55555',
  'item 666666'
])

const title = ref<string>(options[0])

function test(option: string): void {
  title.value = option
}
</script>

<template>
  <div id="trade-header">
    <Dropdown :title="title" class="dropdown">
      <DropdownItem :title="options[0]" :fn="test" />
      <DropdownItem :title="options[1]" :fn="test" />
      <DropdownItem :title="options[2]" :fn="test" />
      <DropdownItem :title="options[3]" :fn="test" />
      <DropdownItem :title="options[4]" :fn="test" />
      <DropdownItem :title="options[5]" :fn="test" />
      <DropdownItem :title="options[6]" :fn="test" />
    </Dropdown>
    <span>BSC</span>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';

#trade-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $trade_header_height;
}
</style>
