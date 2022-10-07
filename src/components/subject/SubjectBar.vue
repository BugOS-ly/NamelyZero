<script lang="ts">
export default {
  name: 'SubjectBar'
}
</script>

<script setup lang="ts">
import Subject from './Subject.vue'
import Details from './details/Details.vue'
import Score from './score/Score.vue'
</script>

<template>
  <div id="subject-bar">
    <Subject />
    <Details />
    <Score />
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';

#subject-bar {
  width: $subject_bar_width;
}
</style>
