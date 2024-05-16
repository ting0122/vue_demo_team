
<script>
export default {
  data() {
    return {
      p1: null,
      p2: null,
      q1: null,
      q2: null,
      citys: [],
      pitys: [], //pitys是指power那個json，歷年價格的檔案
    }
  },
  computed: {
    elasticity: function () {
      if (this.p1 === null || this.p2 === null || this.q1 === null || this.q2 === null) 
      {
        return null; // 如果有任何一個數值為null，則彈性無法計算
      }
      return Math.abs(((this.q2 - this.q1) / this.q1) / ((this.p2 - this.p1) / this.p1));
    }
  },

 
  mounted() {
    fetch("./public/gas_demand.json")  //fetch 操作處於 mounted 鉤子中
      .then(res => res.json())
      .then(data => {
        this.citys = data.filter(city => city.縣市名稱 === '新竹市');
      })
    fetch("./public/power.json")
      .then(res => res.json())
      .then(data => {
        this.pitys = data.filter(pity => pity.縣市名稱 === '新竹市');
    });
  }
};
  
  
</script>

<template>
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
<div class="headline">新竹市瓦斯價格列表</div>
 <div v-if="pitys===null">資料載入中</div> <!--設置空值，如果資料還未取得，就在畫面顯示 "資料載入中"  -->
 <div class="list" v-else>
    <div class="product" v-for="pity in pitys" :key="pity.縣市名稱">
      <div class="縣市名稱" v-if="pity.縣市名稱 === '新竹市'">{{ pity.縣市名稱 }}</div>
      <div class="查報均價" v-if="pity.縣市名稱 === '新竹市'">查報均價: {{ pity.查報均價 }}元/20公斤</div>
      <div class="查報日期" v-if="pity.縣市名稱 === '新竹市'">查報日期: {{ pity.查報日期 }}</div>
    </div>
  </div>
 <div class="First">
    <div>
      <label for="p1">價格P1:</label>
      <input type="text" v-model="p1">
    </div>
    <div>
      <label for="p2">價格P2:</label>
      <input type="text" v-model="p2">
    </div>
    <div>
      <label for="q1">數量Q1:</label>
      <input type="text" v-model="q1">
    </div>
    <div>
      <label for="q2">數量Q2:</label>
      <input type="text" v-model="q2">
    </div>
    <div> 彈性: {{ elasticity }}</div>

</div>
<div class="headline1">新竹市瓦斯使用量列表</div>
<div class="container2">
    <div class="list" v-if="this.citys === null">資料載入中</div>
    <div class="list" v-else>
      <div class="product" v-for="city in this.citys" :key="city.縣市名稱">
        <div class="縣市名稱" v-if="city.縣市名稱 === '新竹市'">{{ city.縣市名稱 }}</div>
        <div class="桶裝液化石油氣用量公噸" v-if="city.縣市名稱 === '新竹市'">桶裝液化石油氣用量公噸 {{ city.桶裝液化石油氣用量公噸 }}</div>
        <div class="年度" v-if="city.縣市名稱 === '新竹市'">年度: {{ city.年度 }}</div>
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
  left: 85px;
  top: 733px;
}

.list {
  width: 50dvw;
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
.First{
  width: 300px;
  height: 200px;
  border-radius: 10px;
  position: absolute;
  right: 0%;
  top:800px;
  background-color:#c9d9cd ;
}
input{
  margin: 10px;
}
.container2{
  width: 50dvw;
  height: 500px;
  position: absolute;
right: -17px;
z-index: -1;
top:800px;

}
.headline1{
  font-size: 50px;
  font-weight: bold;
  position: absolute;
  right: 85px;
  top: 733px;
  z-index: 1;


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