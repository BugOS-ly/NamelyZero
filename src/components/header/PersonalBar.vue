<script lang="ts">
export default {
  name: 'PersonalBar'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

const avatar = ref<string>('src/assets/images/avatar.jpg')
</script>

<template>
  <div id="personal-bar" class="clickable">
    <img id="avatar" :src="avatar" alt="" />
  </div>
</template>

<style scoped lang="scss">
.clickable {
  cursor: pointer;
}

#personal-bar {
  width: 3.8%;

  #avatar {
    width: 100%;
    height: 100%;
    border-radius: $header_bar_radius;
  }
}
</style>
