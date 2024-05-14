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
  //lang把當前樣式檔與全域做區隔，另外建議加上 scoped attribute 將樣式限定在該元件內，避免元件影響到全域樣式。
  .headerArea {
      width: 100dvw;
      height: 10dvh;
  }
</style>