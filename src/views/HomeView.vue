<script>
import { RouterLink } from 'vue-router';

export default{
  name: "Home",
  data(){
    return{
      imgArr : [
          {image:"src/assets/ting0122/charging_station.png", alt: "charging_station" },
          {image:"src/assets/ting0122/gasolin.png", alt:"gasolin"},
          {image:"src/assets/ting0122/electronical.png", alt:"electronical"},
          {image:"src/assets/ting0122/gas.png", alt:"gas"}
      ]
    }
  }
}

</script>

<template>

<!--Navigation Bar-->
<nav><!--Logo image and words-->
    <i class="fa-solid fa-tree"></i>
    <div class="logo"><RouterLink to="/">ENERGYMAP</RouterLink></div>
  <ul><!--page links-->
    <li><RouterLink to="/TaiwanChargeMap">充電站位置</RouterLink></li>
    <li><RouterLink to="/oilInformation">油價資訊</RouterLink></li>
    <li><RouterLink to="/ElectricCost">電價資訊</RouterLink></li>
    <li><RouterLink to="/city">天然氣資訊</RouterLink></li>
  </ul>
</nav>

<!--left_Text-->
<div class="left_text">
  <h1>Save Energy, Travel Wisely</h1>
  <p>Understanding the fluctuations in oil and electricity prices is crucial, thus making smarter, more economical, and environmentally friendly choices in your daily life.</p>
</div>

<!--Pages Carousel-->
<!--page1-->
<div class="pgs-container left1">
  <div class="theme">
      <img :src="imgArr[0].image" alt="imgArr[0].alt">
  </div>
  <div class="desc"></div>
</div>

<!--page2-->
<div class="pgs-container left2">
  <div class="theme">
    <img :src="imgArr[1].image" alt="imgArr[1].alt">
  </div>
  <div class="desc"></div>
</div>

<!--page3-->
<div class="pgs-container right2">
  <div class="theme">
    <img :src="imgArr[2].image" alt="imgArr[2].alt">
  </div>
  <div class="desc"></div>
</div>

<!--page4-->
<div class="pgs-container right1">
  <div class="theme">
    <img :src="imgArr[3].image" alt="imgArr[3].alt">
  </div>
  <div class="desc"></div>
</div>



<!--Footer-img-->
<div class="footer">
    <img src="../assets/ting0122/global_bg.png" alt="">
</div>


</template>




<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #F8EEDA;
}

//Navigation Bar , logo's left is 100px
nav{
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #F8EEDA;
  //remove underline of links
  a{
  color: black;
  text-decoration: none; /* 移除下划线 */
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

//Left_text
.left_text{
  position: absolute;
  top: 150px;
  left: 100px;
  width: 430px;
  height: 500px;
  h1{
    font-size: 70px;
  }
  p{
    padding-top: 20px;
    font-size: 20px;
    letter-spacing: 1px;
  }
}

//Pages Carousel

  //page 1
  .left1{
    z-index: 1;
    width: 300px;
    height: 380px;
    position: absolute;
    bottom: 3%;
    left: 80px;
    .theme{
      position: relative;
      width: 100%;
      height: 80%;
      border-radius: 50%;
      background-color: #d8fb5a;
      img{
        position: absolute;
        width: 100%;
        height: auto;
        left: 20px;
        bottom: 60px;
      }
    }
    .desc{
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: 1000;
      color: black;
    }
  }
  .left2{
    z-index: 1;
    width: 300px;
    height: 380px;
    position: absolute;
    bottom: 150px;
    left: 540px;
    .theme{
      position: relative;
      width: 100%;
      height: 80%;
      border-radius: 50%;
      background-color: #d8fb5a;
      img{
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 60px;
        left: 0;
      }
    }
    .desc{
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: 1000;
      color: black;
    }
  }
  .right2{
    z-index: 1;
    width: 300px;
    height: 380px;
    position: absolute;
    bottom: 150px;
    left:1000px;
    .theme{
      position: relative;
      width: 100%;
      height: 80%;
      border-radius: 50%;
      background-color: #d8fb5a;
      img{
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 60px;
      }
    }
    .desc{
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: 1000;
      color: black;
    }
  }
  .right1{
    z-index: 1;
    width: 300px;
    height: 380px;
    position: absolute;
    bottom: 30px;
    right: 100px;
    .theme{
      position: relative;
      width: 100%;
      height: 80%;
      border-radius: 50%;
      background-color: #d8fb5a;
      img{
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 60px;
        left: 5px;
      }
    }
    .desc{
      width: 100%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: 1000;
      color: black;
    }
  }

//footer-img
.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img{
    width: 120%;
    padding-top: 680px;
    padding-left: 80px;
    color: #48725c;
    opacity: 0.5;
  }
}
</style>
