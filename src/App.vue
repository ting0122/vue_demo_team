<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- <header>
     <RouterLink to="/">首頁</RouterLink> 
    <RouterLink to="/ElectricCost">電價幫手</RouterLink>
    <RouterLink to="/oilInformation">油價動態</RouterLink>
    <RouterLink to="/city">充電站資訊</RouterLink>
    <RouterLink to="/TaiwanChargeMap">桶裝瓦斯價格</RouterLink> 
  </header> -->
  <RouterView />
</template>

<style scoped lang="scss">
// header{
//   width: 100dvw;
//   height: 10dvh;
//   z-index: 999;
//   position: relative;
//   top: 0;
// }

</style>
