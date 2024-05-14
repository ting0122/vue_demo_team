<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue' 
</script>

<template>
  <header>
    <RouterLink to="/ElectricCost">ElectricCost</RouterLink>
    <RouterLink to="/">分頁2</RouterLink>
    <RouterLink to="/oilInformation">oilInformation</RouterLink>
  </header>

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
