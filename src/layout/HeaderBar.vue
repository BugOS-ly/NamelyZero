<script lang="ts">
export default {
  name: 'HeaderBar'
}
</script>

<script setup lang="ts">
import LogoBar from '@/components/header/LogoBar.vue'
import Dropdown from '@/components/dropdown/Dropdown.vue'
import DropdownItem from '@/components/dropdown/DropdownItem.vue'
import SearchBar from '@/components/header/SearchBar.vue'
import SwitchBar from '@/components/header/SwitchBar.vue'
import PersonalBar from '@/components/header/PersonalBar.vue'
import { reactive, ref } from 'vue'

const title = ref<string>('PancakeSwap pair')

const options = reactive<string[]>([
  '你好',
  'item 1',
  'item 22',
  'item 333',
  'item 4444',
  'item 55555',
  'item 666666'
])

function test(option: string): void {
  title.value = option
}
</script>

<template>
  <div id="header-bar">
    <LogoBar />
    <div id="title-bar">
      <Dropdown :title="title">
        <DropdownItem :title="options[0]" :fn="test" />
        <DropdownItem :title="options[1]" :fn="test" />
        <DropdownItem :title="options[2]" :fn="test" />
        <DropdownItem :title="options[3]" :fn="test" />
        <DropdownItem :title="options[4]" :fn="test" />
        <DropdownItem :title="options[5]" :fn="test" />
        <DropdownItem :title="options[6]" :fn="test" />
      </Dropdown>
    </div>

    <div id="search-switch">
      <SearchBar />
      <SwitchBar />
    </div>
    <PersonalBar />
  </div>
</template>

<style scoped lang="scss">
#header-bar {
  display: flex;
  justify-content: space-between;
  height: $header_bar_height;

  #title-bar {
    display: flex;
    align-items: center;
    width: 32%;
    transform: translateX(-9.5%);
  }

  #search-switch {
    display: flex;
    justify-content: space-around;
    width: 48%;
    transform: translateX(-5%);
  }
}
</style>
