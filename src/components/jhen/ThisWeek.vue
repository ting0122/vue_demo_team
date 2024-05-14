<script>
import { ref, watch } from "vue";

export default {
  data() {
    // data:function(){}
    return {
      inputAmount: 0, // 油量輸入值
      inputMoney: 0, // 金額輸入值
      fuelSelect: "", // 油品選擇
      resultMoney: 0, // 花費金額
      resultAmount: 0, // 入油量
      fuel92: 0,
      fuel95: 0,
      fuel98: 0,
      fuelDie: 0, // 本周油價
      changeVal: "A",
      hisFuel95: 0.0,
      hisFuel98: 0.0,
      hisFuelDie: 0.0,
      hisFuel92: 0.0, //上周油價
      compared92: 0,
      compared95: 0,
      compared98: 0,
      comparedDie: 0, // 本周與上周價差
    };
  },
  created() {
    this.fetchFuelOptions();
    // this.comparedHis92();
    // this.comparedHis95();
    // this.comparedHis98();
    // this.comparedHisDie();
  },
  methods: {
    // 抓取 api 資料的方法
    fetchFuelOptions() {
      fetch("./src/components/jhen/result (2).json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.fuel92 = data[2].參考牌價;
          this.fuel95 = data[1].參考牌價;
          this.fuel98 = data[0].參考牌價;
          this.fuelDie = data[4].參考牌價;
          this.hisFuel92 = data[48].參考牌價;
          this.hisFuel95 = data[49].參考牌價;
          this.hisFuel98 = data[50].參考牌價;
          this.hisFuelDie = data[51].參考牌價;

          const diff92 = this.hisFuel92 - this.fuel92;
          console.log(diff92)
          if (diff92 === 0) {
            this.compared92 = "0";
          } else if (diff92 > 0) {
            this.compared92 = ` ▼ ${diff92.toFixed(2)}`;
          } else {
            this.compared92 = ` ▲ ${Math.abs(diff92).toFixed(2)}`;
          }

          const diff95 = this.hisFuel95 - this.fuel95;
          console.log(diff95)
          if (diff95 === 0) {
            this.compared95 = "0";
          } else if (diff95 > 0) {
            this.compared95 = ` ▼ ${diff95.toFixed(2)}`;
          } else {
            this.compared95 = ` ▲ ${Math.abs(diff95).toFixed(2)}`;
          }

          const diff98 = this.hisFuel98 - this.fuel98;
          console.log(diff98)
          if (diff98 === 0) {
            this.compared98 = "0";
          } else if (diff92 > 0) {
            this.compared98 = ` ▼ ${diff98.toFixed(2)}`;
          } else {
            this.compared98 = ` ▲ ${Math.abs(diff98).toFixed(2)}`;
          }

          const diffDie = this.hisFuelDie - this.fuelDie;
          console.log(diffDie)
          if (diffDie === 0) {
            this.comparedDie = "0";
          } else if (diffDie > 0) {
            this.comparedDie = ` ▼ ${diffDie.toFixed(2)}`;
          } else {
            this.comparedDie = ` ▲ ${Math.abs(diffDie).toFixed(2)}`;
          }
        });
    },
    // 計算油價的方法
    calcFuelMoney() {
      switch (this.fuelSelect) {
        case "92無鉛汽油":
          this.resultMoney = this.inputAmount * this.fuel92;
          break;
        case "95無鉛汽油":
          this.resultMoney = this.inputAmount * this.fuel95;
          break;
        case "98無鉛汽油":
          this.resultMoney = this.inputAmount * this.fuel98;
          break;
        case "超級柴油":
          this.resultMoney = this.inputAmount * this.fuelDie;
          break;
        default:
          console.log("請選擇油品");
      }
    },
    // 計算油量的方法
    calcFuelAmount() {
      switch (this.fuelSelect) {
        case "92無鉛汽油":
          this.resultAmount = this.inputMoney / this.fuel92;
          break;
        case "95無鉛汽油":
          this.resultAmount = this.inputMoney / this.fuel95;
          break;
        case "98無鉛汽油":
          this.resultAmount = this.inputMoney / this.fuel98;
          break;
        case "超級柴油":
          this.resultAmount = this.inputMoney / this.fuelDie;
          break;
        default:
          console.log("請選擇油品");
      }
    },
  },
};
</script>

<template>
  

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  
  <div class="bigArea">
    <!-- 油價顯示區 -->
    <div class="title">本週油價</div>
    <div class="showFuel">
      <div class="a92 fuel">
        <div class="compare">{{ this.compared92 }}</div>
        <div class="back">92</div>
        <div class="backShadow">92</div>
        <p id="fuel92 feulPer">{{ this.fuel92 }}</p>
        <div class="per">元/升</div>
      </div>
      <div class="a95 fuel">
        <div class="compare">{{ this.compared95 }}</div>
        <div class="back">95</div>
        <div class="backShadow">95</div>
        <p id="fuel95">{{ this.fuel95 }}</p>
        <div class="per">元/升</div>
      </div>
      <div class="a98 fuel">
        <div class="compare">{{ this.compared98 }}</div>
        <div class="back">98</div>
        <div class="backShadow">98</div>
        <p id="fuel98">{{ this.fuel98 }}</p>
        <div class="per">元/升</div>
      </div>
      <div class="diesel fuel">
        <div class="compare" style="right: 3%;">{{ this.comparedDie }}</div>
        <div class="back" style="font-size: 4.3em;
    top: -11%;">柴油</div>
        <div class="backShadow" style="font-size: 4.3em;top: -11%;
">柴油</div>
        <p id="fuelDie">{{ this.fuelDie }}</p>
        <div class="per">元/升</div>
      </div>
    </div>

    <!-- 油價小算盤 -->
    <div class="calcTitle">油價 | 油量 試算器</div>
    <div class="calc">
      <!-- 花費金額計算 -->
      <div class="calcSelect">
        <label class="oilLebel">
          <input
            class="oil"
            type="radio"
            name="label"
            value="A"
            checked="checked"
            v-model="this.changeVal"
          />
          <span class="oilButton">想加多少油</span>
        </label>

        <label class="moneyLebel"
          ><input
            class="money"
            type="radio"
            name="label"
            value="B"
            checked="checked"
            v-model="this.changeVal"
          /><span class="moneyButton">想花多少錢</span></label
        >
      </div>
      <div class="calcMoney content" v-show="this.changeVal == 'A'">
        <!-- <h3>請輸入欲加油的油量：</h3> -->
        <input
          class="inMoney"
          type="number"
          name=""
          id=""
          v-model="inputAmount"
        />
        <div class="unitL" style="right: 12%">公升</div>
        <!-- <div class="plus">+</div> -->
        <input
          class="slider"
          type="range"
          v-model="inputAmount"
          min="0"
          max="50"
          step="1"
          value="0"
        />
        <!-- <div class="minus">-</div> -->
        <!-- <p>{{ inputAmount }} 公升</p> -->
        <h3 class="feulSelectTitle">請選擇油品：</h3>
        <div class="choose">
        <label for="oil92Item" class="oilItemLabel">
        <input type="radio" class="oilItem" id="oil92Item" v-model="this.fuelSelect" value="92無鉛汽油" name="p1" checked="checked" style="left: 0%;top: 1%;"><span class="radio92 oilItemText" style="left:-2%;top: 1%;"> 92無鉛汽油 </span></label>
        <label for="oil95Item" class="oilItemLabel">
        <input type="radio" class="oilItem" id="oil95Item" v-model="this.fuelSelect" value="95無鉛汽油" name="p1" checked="checked" style="left: 24%;top: 1%;"><span class="radio95 oilItemText" style="left: 24%;top: 1%;"> 95無鉛汽油</span></label>
        <label for="oil98Item" class="oilItemLabel">
        <input type="radio" class="oilItem" id="oil98Item" v-model="this.fuelSelect" value="98無鉛汽油" name="p1" checked="checked" style="left: 47%;top: 1%;"><span class="radio98 oilItemText" style="left: 47%;top: 1%;"> 98無鉛汽油 </span></label>
        <label for="oilDieItem" class="oilItemLabel">
        <input type="radio" class="oilItem" id="oilDieItem" v-model="this.fuelSelect" value="超級柴油" name="p1" checked="checked" style="left: 75%;top: 1%;"><span class="radioDie oilItemText" style="left: 70%;top: 1%;"> 超級柴油 </span></label>
      </div>

        <!-- <p>{{ fuelSelect }}</p> -->
        <button type="button" class="enter" id="btn_oil" @click="calcFuelMoney">
          確定
        </button>
        <h3 id="fuelFin" class="calcFin">
          本次加油需花費：{{ resultMoney.toFixed(1) }} 元
        </h3>
        <h4 class="feulIntro">計算公式：輸入油量 x 本周油價 = 本次預計花費</h4>
      </div>
      <!-- 入油量計算 -->

      <div class="calcAmount content" v-show="this.changeVal == 'B'">
        <!-- <h3>請輸入欲花費的金額：</h3> -->
        <input class="inAmount" type="number" v-model="inputMoney" />
        <!-- <div class="plus">+</div> -->
        <input
          type="range"
          class="slider"
          v-model="inputMoney"
          min="10"
          max="2000"
          step="1"
          value="0"
        />
        <!-- <div class="minus">-</div> -->
        <div class="unitL">元</div>
        <!-- <p>{{ inputMoney }} 元</p> -->
        <h3 class="feulSelectTitle">請選擇油品：</h3>
        <div class="choose">
        <label for="oil92Item" class="oilItemLabel" >
        <input type="radio" class="oil92 oilItem" id="oil92Item" v-model="this.fuelSelect" value="92無鉛汽油" name="Num" style="left: 0%;top: 1%; "><span class="radio92 oilItemText" style="left: -2%;top: 1%;">92無鉛汽油</span></label>
        <label for="oil95Item" class="oilItemLabel" >
        <input type="radio" class="oil95 oilItem"  id="oil95Item" v-model="this.fuelSelect" value="95無鉛汽油" name="Num" style="left: 24%;top: 1%;"><span class="radio95 oilItemText" style="left: 24%;top: 1%;">95無鉛汽油</span></label>
        <label for="oil98Item" class="oilItemLabel" >
        <input type="radio" class="oil98 oilItem"  id="oil98Item" v-model="this.fuelSelect" value="98無鉛汽油" name="Num" style="left: 47%;top: 1%;"><span class="radio98 oilItemText" style="left: 48%;top: 1%;">98無鉛汽油</span></label>
        <label for="oilDieItem" class="oilItemLabel" >
        <input type="radio" class="oilDie oilItem" id="oilDieItem" v-model="this.fuelSelect" value="超級柴油" name="Num" style="left: 75%;top: 1%;"><span class="radioDie oilItemText" style="left: 70%;top: 1%;">超級柴油</span></label>
      </div>
        <!-- <p>{{ fuelSelect }}</p> -->
        <button
          type="button"
          class="enter"
          id="btn_money"
          @click="calcFuelAmount"
        >
          確定
        </button>
        <h3 id="amount" class="calcFin">
          本次加油可加：{{ resultAmount.toFixed(1) }} 公升
        </h3>
        <h4 class="feulIntro">計算公式：輸入油量 ÷ 本周油價 = 本次預計花費</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


    




</style>
