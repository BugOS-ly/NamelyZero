<script lang="ts">
export default {
  name: 'Score'
}
</script>

<script setup lang="ts"></script>

<template>
  <div id="score"></div>
</template>

<style scoped lang="scss">
@import '../style.scss';

#score {
  height: $score_height;
  background-color: green;
}
</style>
