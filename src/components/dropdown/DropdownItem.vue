<script lang="ts">
export default {
  name: 'DropdownItem'
}
</script>

<script setup lang="ts">
defineProps<{
  title: string
  fn: Function
}>()
</script>

<template>
  <li class="dropdown-option clickable" @click="fn(title)">
    {{ title }}
  </li>
</template>

<style scoped>
.clickable {
  cursor: pointer;
}

.dropdown-option {
  width: fit-content;
  padding: 2px 0;
}
</style>
