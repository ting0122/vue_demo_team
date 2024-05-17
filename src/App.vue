<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- <header>
     <RouterLink to="/">分頁</RouterLink> -->

    <!-- <RouterLink to="/ElectricCost">ElectricCost</RouterLink>
    <RouterLink to="/oilInformation">oilInformation</RouterLink>
    <RouterLink to="/city">city</RouterLink>
    <RouterLink to="/TaiwanChargeMap">TaiwanChargeMap</RouterLink> 
  </header>-->
  <RouterView />
</template>

<style scoped lang="scss">
header{
  width: 10dvw;
  height: 10dvh;
  z-index: 99;
}

</style>
