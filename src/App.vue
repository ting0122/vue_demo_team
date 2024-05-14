<script setup>
import Header from './components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="header">
    <Header />

  </div>

  <div class="content">

    <div style="position: relative; width: 60%; height: 400px; padding-top: 100px;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
      <iframe loading="lazy"
        style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGFCShWQmU&#x2F;tfoCfektmGSkB9Ly21MKyQ&#x2F;view?embed"
        allowfullscreen="allowfullscreen" allow="fullscreen">
      </iframe>
    </div>
  </div>
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