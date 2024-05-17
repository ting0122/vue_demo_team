<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        
    },
    components:{ 
        RouterLink,
    },
}
</script>


<template>
<!--Navigation Bar-->
<nav><!--Logo image and words-->
    <i class="fa-solid fa-tree"></i>
    <div class="logo"><RouterLink to="/">ENERGYMAP</RouterLink></div>
  <ul><!--page links-->
    <li><RouterLink to="/ElectricCost">電價幫手</RouterLink></li>
    <li><RouterLink to="/oilInformation">油價動態</RouterLink></li>
    <li><RouterLink to="/TaiwanChargeMap">充電站資訊</RouterLink></li>
    <li><RouterLink to="/city">桶裝瓦斯價格</RouterLink></li>
  </ul>
</nav>


</template>


<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//Navigation Bar , logo's left is 100px
nav{
  position: relative;
  width: 100%;
  height: 100px;

  background: #c9d9cda3;;
  //remove underline of links
  a{
  color: black;
  text-decoration: none; /* 移除下划线 */
  &:hover{
        font-size:36px;
  }
  }

  i{
    position: absolute;
    top: 33px;
    left: 100px;
    font-size: 30px;
  }
  .logo{
    position: absolute;
    top: 33px;
    left: 140px;
    font-size: 30px;
    color: black;
    .router-link-exact-active, .router-link-active, .router-link {
      color: black;
      text-decoration: none;
    }
  }
  ul{
    padding: 0 200px;
    margin-left: 700px;
    height: 100%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
}
</style>