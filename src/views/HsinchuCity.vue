
<script setup>


import {onMounted,ref} from "vue";  //建立響應式狀態taipei一開始是空值  //onMounted組件掛載(靜態畫面)之後會呼叫
let citys = ref(null);
//組件掛載完成後，呼叫fetch串接後端的資料
onMounted(async function(){  //onMounted代表掛載完成後要做的事情
let response=await fetch("./public/power.json");
let data = await response.json();
citys.value = data.filter(city => city.縣市名稱 === '新竹市'); 
});






</script>

<template>


<div class="container">
    <div class="headline">新竹市瓦斯價格列表</div>
    <div class="list" v-if="citys === null">資料載入中</div>
    <div class="list" v-else>
      <div class="product" v-for="city in citys" :key="city.縣市名稱">
        <div class="縣市名稱" v-if="city.縣市名稱 === '新竹市'">{{ city.縣市名稱 }}</div>
        <div class="查報均價" v-if="city.縣市名稱 === '新竹市'">查報均價: {{ city.查報均價 }}元/20公斤</div>
        <div class="查報日期" v-if="city.縣市名稱 === '新竹市'">查報日期: {{ city.查報日期 }}</div>
      </div>

</div>
  </div>
  <img src="../assets/gaspic.jfif" alt="">
  <div id="firstArea">
<h1> LPG GAS </h1>
  </div>

</template>


<style scoped>
#firstArea {
  width: 100%;
  height: 50px;
  background-color: #c9d9cd;
}
h1{
  color: white;
  display: flex;
  justify-content: center;     
}

.headline {
  font-size: 50px;
  font-weight: bold;
  position: absolute;
  right: 400px;
  top: 733px;
}

.list {
  width: 100dvw;
  height: 500px;
  /* 捲軸容器的高度 */
  overflow-y: auto;
  /* 垂直捲軸 */
  line-height: 1.5rem;
  /*   增加行高 */
  background-color: #FFF7E6;

}


.product {
  padding: 15px 0;
  border-bottom: 1px solid #dddd;

}

.縣市名稱 {
  font-weight: bold;
}

img {
  width: 100dvw;
  height: 792px;
  position: absolute;
  top: 1%;
  z-index: -1;
}
</style>