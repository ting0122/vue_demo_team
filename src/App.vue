<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue' 
</script>

<template>
<<<<<<< HEAD
  <header>
    <h1>This is 首頁.</h1>

        <RouterLink to="/">分頁1</RouterLink>
        <RouterLink to="/">分頁2</RouterLink>
        <RouterLink to="/oilInformation">oilInformation</RouterLink>
  </header>
=======
  <div class="header">
    <Header />
  </div>
>>>>>>> Yuhan

  <RouterView />
</template>

<<<<<<< HEAD
<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */
=======
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
>>>>>>> Yuhan

</style>
