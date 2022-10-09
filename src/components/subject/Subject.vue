<script lang="ts">
export default {
  name: 'Subject'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
import { ref } from 'vue'

const subjectImg = ref<string>('src/assets/images/avatar.jpg')
</script>

<template>
  <div id="subject">
    <div id="up-bar">
      <img id="subject-img" class="clickable" :src="subjectImg" alt="" />
      <div id="subject-name" class="clickable">
        <span> BSC/Cake </span>
      </div>
      <div id="add" class="round-icon clickable">
        <SymbolIcon name="jia" size="8px" />
      </div>
    </div>
    <div id="down-bar">
      <div id="link">
        <div id="enter" class="round-icon clickable">
          <SymbolIcon name="jinru" size="8px" />
        </div>
        <div id="star" class="round-icon clickable">
          <SymbolIcon name="xingxing" size="8px" />
        </div>
        <div id="share" class="round-icon clickable">
          <SymbolIcon name="share" size="8px" color="#fff" />
        </div>
      </div>
      <button id="trade" class="clickable">TRADE</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';

.clickable {
  cursor: pointer;
}

.round-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #322f4a;
  border-radius: $subject_radius;

  &:hover {
    background-color: #322f4a;
  }
}

#subject {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: $subject_height;

  #up-bar {
    display: flex;
    justify-content: space-between;
    height: 48%;

    #subject-img {
      display: inline-block;
      width: 10%;
      border-radius: $subject_radius;
    }

    #subject-name {
      display: flex;
      align-items: center;
    }

    #add {
      width: 10%;
      height: 100%;
    }
  }

  #down-bar {
    display: flex;
    justify-content: space-between;
    height: 42%;

    #link {
      display: flex;
      justify-content: space-between;
      width: 30%;
      height: 100%;

      #enter,
      #star,
      #share {
        width: 30%;
        height: 100%;
      }
    }

    #trade {
      width: 18%;
      border: 2px solid #fa9083;
      border-radius: $subject_radius;
      background-color: transparent;
      color: #fff;
    }
  }
}
</style>
