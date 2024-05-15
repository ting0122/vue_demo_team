<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue' 
</script>

<template>
  <header>
    <!-- <RouterLink to="/">分頁</RouterLink> -->
    <RouterLink to="/ElectricCost">ElectricCost</RouterLink>
    <RouterLink to="/oilInformation">oilInformation</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.header{
  width: 10dvw;
  height: 10dvh;
}

</style>
