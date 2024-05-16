<script setup>
import Header from './components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="header">
    <Header />

  </div>

  <
<RouterView />

</template>

<style scoped>
.header {
  width: 100dvw;
  height: 20dvh;
  background-color: #C9D9CD;
}

.content {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  /* flex-direction: column; 交錯軸線位置與主軸線位置調換，因此內容物呈現直向排列*/
  /* justify-content: center; */
  align-items: center;
  opacity: 0.9;
}

</style>