<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<script setup lang="ts">
import Menu from '@/components/menu/Menu.vue'
import MenuItem from '@/components/menu/MenuItem.vue'
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'

function test() {
  alert('你好')
}
</script>

<template>
  <Menu id="nav-bar">
    <MenuItem>
      <SymbolIcon name="zhuye1" size="14px" color="#c6c1ee" />
    </MenuItem>

    <Menu id="main-bar">
      <Menu id="up-bar">
        <MenuItem>
          <SymbolIcon name="LOCALSEARCH" size="10px" />
        </MenuItem>
        <MenuItem>
          <SymbolIcon name="huojian" size="10px" />
        </MenuItem>
        <MenuItem>
          <SymbolIcon name="stack" size="9px" />
        </MenuItem>
        <MenuItem>
          <SymbolIcon name="save" size="9px" />
        </MenuItem>
      </Menu>

      <Menu id="middle-bar">
        <MenuItem>
          <SymbolIcon name="shandian" size="10px" />
        </MenuItem>
        <MenuItem>
          <SymbolIcon name="process" size="9px" color="#9d99be" />
        </MenuItem>
        <MenuItem>
          <SymbolIcon name="xiazai" size="15px" style="margin: -10px auto" />
        </MenuItem>
        <MenuItem>
          <SymbolIcon name="lianjie" size="10px" color="#9d99be" />
        </MenuItem>
      </Menu>
    </Menu>

    <Menu id="down-bar">
      <MenuItem>
        <SymbolIcon name="zhexiantu" size="12px" color="#c3bde7" />
      </MenuItem>
      <MenuItem>
        <SymbolIcon name="zuanshi" size="10px" />
      </MenuItem>
    </Menu>

    <MenuItem>
      <SymbolIcon name="faxian" size="16px" />
    </MenuItem>
  </Menu>
</template>

<style scoped lang="scss">
#nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  float: left;
  width: $nav_bar_width;
  height: $nav_bar_height;

  #main-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;

    #up-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 49%;
      padding: 10% 0;
      border-radius: $nav_bar_radius;
      background-color: #432a49;
    }

    #middle-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 49%;
      padding: 10% 0;
      border-radius: $nav_bar_radius;
      background-color: #332855;
    }
  }

  #down-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 18%;
    padding-bottom: 80%;
  }
}
</style>
