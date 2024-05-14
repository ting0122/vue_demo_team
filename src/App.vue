<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue' 
</script>

<template>
  <div class="header">
    <Header />
  </div>

  <RouterView />
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header{
  width: 10dvw;
  height: 10dvh;
}

</style>
