<script lang="ts">
export default {
  name: 'Dropdown'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
import { ref } from 'vue'

defineProps<{
  title: string
}>()

const isOPen = ref<boolean>(false)

function toggleOpen() {
  isOPen.value = !isOPen.value
}
</script>

<template>
  <div id="dropdown">
    <div id="current-option" @click.prevent="toggleOpen">
      <span id="title">
        {{ title }}
      </span>
      <SymbolIcon name="zhankaijiantou" size="6.5px" />
      <div v-show="isOPen" id="dropdown-menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#dropdown {
  display: inline-block;

  #current-option {
    width: fit-content;
    cursor: pointer;

    #title {
      padding-right: 3px;
    }

    #dropdown-menu {
      position: absolute;
      max-width: 100%;
      padding: 2px;
      border-radius: 5px;
      background-color: green;
    }
  }
}
</style>
