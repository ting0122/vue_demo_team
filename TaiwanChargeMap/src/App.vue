<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TaiwanChargeMap from './views/TaiwanChargeMap.vue'
// import Animation from './views/animation.vue';
</script>

<template>
  <div class="header">
      <TaiwanChargeMap />
  </div>

  <RouterView />
</template>

<style scoped lang="scss">

</style>
