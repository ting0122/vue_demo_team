<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>This is 首頁.</h1>

        <RouterLink to="/ElectricCost">電價</RouterLink>


  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


</style>
