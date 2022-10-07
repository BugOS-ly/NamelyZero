<script lang="ts">
export default {
  name: 'DetailsItem'
}
</script>

<script setup lang="ts">
import SymbolIcon from '@/components/SymbolIcon/SymbolIcon.vue'
import { detailsItemProps } from './Details'

defineProps<{
  props: detailsItemProps
}>()
</script>

<template>
  <div id="details-item">
    <div class="left-icon">
      <SymbolIcon :name="props.iconName" />
    </div>
    <div class="right-describe">
      <span class="description"> {{ props.description }} </span>
      <br />
      <span> {{ props.value }} </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../style.scss';

#details-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47.5%;
  height: 30%;
  margin-bottom: 8px;
  color: aliceblue;
  border-radius: $details_item_radius;
  background-color: #3b3854;

  .left-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 60%;
    border-radius: $details_item_radius;
    color: #09ddff;
    background-color: #4d3e59;
  }

  .right-describe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    font-size: 6px;

    .description {
      color: #807b9e;
    }
  }
}
</style>
