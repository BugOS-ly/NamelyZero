<script lang="ts">
export default {
  name: 'NavBar'
}
</script>

<script setup lang="ts">
import Menu from '@/components/menu/Menu.vue'
import MenuItem from '@/components/menu/MenuItem.vue'
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
</script>

<template>
  <Menu id="nav-bar">
    <MenuItem title="主页">
      <SymbolIcon name="zhuye1" size="14px" color="#c6c1ee" />
    </MenuItem>

    <div id="main-bar">
      <div id="up-bar">
        <MenuItem title="本地搜索">
          <SymbolIcon name="LOCALSEARCH" size="10px" />
        </MenuItem>
        <MenuItem title="火箭">
          <SymbolIcon name="huojian" size="10px" />
        </MenuItem>
        <MenuItem title="堆栈">
          <SymbolIcon name="stack" size="9px" />
        </MenuItem>
        <MenuItem title="保存">
          <SymbolIcon name="save" size="9px" />
        </MenuItem>
      </div>

      <div id="middle-bar">
        <MenuItem title="闪电">
          <SymbolIcon name="shandian" size="10px" />
        </MenuItem>
        <MenuItem title="过程">
          <SymbolIcon name="process" size="9px" color="#9d99be" />
        </MenuItem>
        <MenuItem title="下载">
          <SymbolIcon name="xiazai" size="15px" style="margin: -10px auto" />
        </MenuItem>
        <MenuItem title="链接">
          <SymbolIcon name="lianjie" size="10px" color="#9d99be" />
        </MenuItem>
      </div>
    </div>

    <div id="down-bar">
      <MenuItem title="趋势">
        <SymbolIcon name="zhexiantu" size="12px" color="#c3bde7" />
      </MenuItem>
      <MenuItem title="钻石">
        <SymbolIcon name="zuanshi" size="10px" />
      </MenuItem>
    </div>

    <MenuItem title="世界">
      <SymbolIcon name="faxian" size="16px" />
    </MenuItem>
  </Menu>
</template>

<style scoped lang="scss">
#nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
      align-items: center;
      height: 49%;
      padding: 10% 0;
      border-radius: $nav_bar_radius;
      background-color: #432a49;
    }

    #middle-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
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
    align-items: center;
    height: 18%;
    padding-bottom: 80%;
  }
}
</style>
