<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue' 
</script>

<template>
  <header>
    <div class="header">
      <Header />
    </div>
    <h1>This is 首頁.</h1>

        <RouterLink to="/">分頁1</RouterLink>
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
