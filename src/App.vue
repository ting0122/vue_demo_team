<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>This is 首頁.</h1>

        <RouterLink to="/">分頁1</RouterLink>
        <RouterLink to="/">分頁2</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


</style>
