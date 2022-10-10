<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>

<script setup lang="ts">
import RouterUtil from '@/utils/RouterUtils'

const props = defineProps<{
  title: string
  // 跳转路由的名称 name
  to?: string | undefined
}>()
</script>

<template>
  <div
    id="menu-item"
    class="clickable"
    :data-title="props.title"
    @click.prevent="RouterUtil.push(to)"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.clickable {
  // 可点击的
  cursor: pointer;
}

#menu-item {
  position: relative;

  &[data-title]:hover:after {
    content: attr(data-title);
    position: absolute;
    font-size: 7px;
    color: #9994ba;
    background-color: #2e2b43;
    border-radius: 3px;
    width: max-content;
    padding: 3px;
  }
}
</style>
