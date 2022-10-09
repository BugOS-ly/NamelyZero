<script lang="ts">
export default {
  name: 'PersonalBar'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from '@/components/menu/Menu.vue'
import MenuItem from '@/components/menu/MenuItem.vue'

const avatar = ref<string>('src/assets/images/avatar.jpg')
</script>

<template>
  <Menu id="personal-bar">
    <MenuItem id="personal" title="个人中心">
      <img id="avatar" :src="avatar" alt="" />
    </MenuItem>
  </Menu>
</template>

<style scoped lang="scss">
.clickable {
  cursor: pointer;
}

#personal-bar {
  width: 3.8%;

  #personal {
    height: 100%;
  }

  #avatar {
    border-radius: $header_bar_radius;
  }
}
</style>
