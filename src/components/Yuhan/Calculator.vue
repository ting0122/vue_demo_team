<script>
export default{
    data(){
        return{ 
            // 夏月電費
            s:"",
            //尖峰時間占比
            sPeak:50,
            sNotPeak:50,
            // 非夏月電費
            notS:"",
            //尖峰時間占比
            notSPeak:50,
            notSNotPeak:50,

            // 夏月非夏月切換
            changeForm:"summer",
            changeFormForNT:"summer",
            //電量度數
            degree:"",
            //累進制度數
            notTimeDegree:"",
            notTime:"",
            notT:"",

            selectedOption:"",
        }
    },
    watch: {
        //尖峰時間比滑桿拉動時 離峰時間比也會跟著調整
        sPeak: function(newVal, oldVal) {
        this.sNotPeak = 100 - newVal;
        },
        notSPeak: function(newVal, oldVal) {
        this.notSNotPeak = 100 - newVal;
        },
    },
    methods:{
        // 時間電價
        //夏月總電費
        sTotal(){
            this.s = Math.round((this.sPeak/100 * this.degree * 5.01) +  (this.sNotPeak/100 * this.degree * 1.96) + 75)
        },
        
        //非夏月總電費
        notSTotal(){
            this.notS = Math.round((this.notSPeak/100 * this.degree * 4.78) +  (this.notSNotPeak/100 * this.degree * 1.89) + 75)
        },

        //累進電價總電費
        notTimeTotal(degrees){
            // 非夏月計費
            if(this.changeFormForNT == "notSummer"){
                if(this.notTimeDegree <= 120){
                   this.notT = Math.round(1.68 * this.notTimeDegree)
                    return this.notT
                    }
                else if(this.notTimeDegree > 240 && this.notTimeDegree <= 660){
                    this.notT = Math.round(403.2 + 2.16 * (this.notTimeDegree-240))
                    return this.notT
                    }
                else if(this.notTimeDegree > 660 && this.notTimeDegree <= 1000){
                    this.notT = Math.round(1310.2 + 3.03 * (this.notTimeDegree-660))
                    return this.notT
                    }
                else if(this.notTimeDegree > 1000 && this.notTimeDegree <= 1400){
                    this.notT = Math.round(2340.4 + 4.14 * (this.notTimeDegree-1000))
                    return this.notT
                    }
                else if(this.notTimeDegree > 1400 && this.notTimeDegree <= 2000){
                    this.notT = Math.round(3997.4 + 5.07 * (this.notTimeDegree-1400))
                    return this.notT
                    }
                else if(this.notTimeDegree > 2000){
                    this.notT = Math.round(7038.4 + 6.63 * (this.notTimeDegree-2000))
                    return this.notT
                    }
                }
            //夏月計費
            else{
                if(this.notTimeDegree <= 240){
                    this.notT = Math.round(1.68 * this.notTimeDegree)
                    return this.notT
                    }
                else if(this.notTimeDegree > 240 && this.notTimeDegree <= 660){
                    this.notT = Math.round(403.2 + 2.45 * (this.notTimeDegree-240))
                    return this.notT
                    }
                else if(this.notTimeDegree > 660 && this.notTimeDegree <= 1000){
                    this.notT = Math.round(1432.2 + 3.7 * (this.notTimeDegree-660))
                    return this.notT
                    }
                else if(this.notTimeDegree > 1000 && this.notTimeDegree <= 1400){
                    this.notT = Math.round(2690.2 + 5.04 * (this.notTimeDegree-1000))
                    return this.notT
                    }
                else if(this.notTimeDegree > 1400 && this.notTimeDegree <= 2000){
                    this.notT = Math.round(4706.2 + 6.24 * (this.notTimeDegree-1400))
                    return this.notT
                    }
                else if(this.notTimeDegree > 2000){
                    this.notT = Math.round(8450.2 + 8.46 * (this.notTimeDegree-2000))
                    return this.notT
                    }
            }
        },
    },
    computed: {
    redBar: function() {
        let percent = this.sPeak*100/100;
        return `linear-gradient(to right,rgb(209, 75, 75) `+ percent +`%,rgb(88, 198, 88) `+ 0 +`%)`;
        },
    redBar2: function() {
        let percent = this.notSPeak*100/100;
        return `linear-gradient(to right,rgb(209, 75, 75) `+ percent +`%,rgb(88, 198, 88) `+ 0 +`%)`;
        },
    }

    }
</script>

<template>
    <div class="areaOne">
        <div class="title large">
            <h2>簡易電費試算器</h2>
            <span>省錢的電價模式，你選對了嗎</span>
        </div>
        <p class="details">台電為反應尖峰、半尖峰、離峰不同時間的供電成本，訂定不同費率，尖峰時間電價最高，離峰時間最低，希望藉由調整用電時間，將尖峰用電移轉至離峰時間使用，以達充分利用離峰電力目的，同時也能節省電費支出。</p>
        <button><a href="https://service.taipower.com.tw/taipowerdsm/residential-and-commercial">了解更多</a></button>
    </div>
    <div class="areaTwo">
        <!-- 二段時間電價區域 -->
        <div class="title">
            <h2>二段式時間電價<br>毎期電費計算</h2>
        </div>
        <div class="calculator">
            <p class="note">1.毎戶毎月基本電費75元<br>
            2.用電度數可於電費帳單中取得
            也可上<a href="https://service.taipower.com.tw/ebpps2/">電子帳單服務系統</a>查詢，或<a href="https://www.taipower.com.tw/tc/page.aspx?mid=1427">下載台灣電力App</a><br>
            3.適合毎月用電800度~4400度之住宅選用</p>
            <!-- 夏月非夏月選擇 -->
            <div class="selectedTime">
                <input type="radio" @click="changeForm = 'summer'" id="sTime"  name="timeSelect" >
                    <label for="sTime" class="timeSelect"  :class="{ 'checked': changeForm == 'summer' }">夏月期間(6/1~9/30)</label>
                
                <input type="radio" @click="changeForm = 'notSummer'" id="nSTime"  name="timeSelect">
                <label for="nSTime" class="timeSelect" :class="{ 'checked': changeForm == 'notSummer' }">非夏月期間</label>
            </div>
            <!-- 使用度數輸入 -->
            <div class="inputDegree">
                <label for="degrees">請輸入本期度數</label>
                <input type="number" v-model="degree" id="degrees">
                <span>度</span>
            </div>
            <!-- 夏月用量比輸入 -->
            <div class="proportionInput" v-show="changeForm == 'summer'">
                <div class="peakArea">
                    <h3>尖峰時段</h3>
                    <div class="peakDisplay"></div>
                    <div class="icon">
                        <span>平日<img src="./day-icon.svg" alt="">09:00</span>
                        <span><img src="./night-icon.svg" alt="" class="night">24:00</span> 
                    </div>
                    <h3>離峰時段</h3>
                    <div class="peakDisplay isGreen"></div>
                    <div class="icon">
                        <span>平日<img src="./night-icon.svg" alt="">00:00</span>
                        <span><img src="./day-icon.svg" alt="">09:00</span>
                    </div>
                    <div class="peakDisplay isGreen"></div>
                    <span>六日00:00-24:00</span>
                </div>
                <div class="inputArea">
                    <h3>請輸入尖峰離峰時段使用比例(毎週)</h3>
                    <input type="range" min="0" max="100" step="5" v-model="sPeak" name="hour" class="slider" :style="{background: redBar}">
                    <h3 class="percent"><span>{{ sPeak }}%</span><span>{{ sNotPeak }}%</span></h3>
                </div>
                <button type="button" @click="sTotal()" class="calculate">試算</button>
                <span class="cost">本期電費約為</span><span class="twd">{{s + '元'}}</span>
            </div>

            <!-- 非夏月用量比輸入 -->
            <div class="proportionInput" v-show="changeForm == 'notSummer'">
                <div class="peakArea">
                    <h3>尖峰時段</h3>
                    <span class="peakDisplay isShort"></span>
                    <div class="peakDisplay isShort"></div>
                    <div class="icon">
                        <span>平日<img src="./day-icon.svg" alt="">06:00</span>
                        <span><img src="./day-icon.svg" alt="">11:00</span>
                        <span><img src="./day-icon.svg" alt="">14:00</span>
                        <span><img src="./night-icon.svg" alt="" class="night">24:00</span>
                    </div>
                    <h3>離峰時段</h3>
                    <div class="peakDisplay isGreen isShort"></div>
                    <div class="peakDisplay isGreen isShort"></div>
                    <div class="icon">
                        <span>平日<img src="./night-icon.svg" alt="">00:00</span>
                        <span><img src="./day-icon.svg" alt="">06:00</span>
                        <span><img src="./day-icon.svg" alt="">11:00</span>
                        <span><img src="./day-icon.svg" alt="">14:00</span>
                    </div>
                    <div class="peakDisplay isGreen "></div>
                        <p>六日00:00-24:00</p>
                </div>
                <div class="inputArea">
                    <h3>請輸入尖峰離峰時段使用比例(毎週)</h3>
                    <input type="range" min="0" max="100" step="5" v-model="notSPeak" name="hour" class="slider" :style="{background: redBar2}">
                    <h3 class="percent"><span>{{ notSPeak }}%</span>
                    <span>{{ notSNotPeak }}%</span></h3>
                </div>
                <button type="button" @click="notSTotal()" class="calculate">試算</button>
                <span class="cost">本期電費約為</span><span class="twd">{{notS + '元'}} </span>
            </div>
        </div>
            
        <!-- 累進電量區域 -->
        <div class="title">
            <h2>累進電量<br>毎期電費試算</h2>
        </div>
        <div class="calculator backgroundDark">
            <p class="note">1.僅提供給表燈非營業用戶(家用)<br>
            2.概算電費金額僅供參考，實際電費金額需配合用電情形計算。<br>
            3.<a href="https://www.taipower.com.tw/tc/page.aspx?mid=238">電價表查詢</a></p>

            <!-- 夏月非夏月選擇 -->
            <div class="selectedTime">
                <input type="radio" @click="changeFormForNT = 'summer'" id="nTsummer"  name="timeSelectForNT">
                    <label for="nTsummer" class="timeSelect"  :class="{ 'checked': changeFormForNT == 'summer' }">夏月期間(6/1~9/30)</label>
                <input type="radio" @click="changeFormForNT = 'notSummer'" id="notTimeNotS"  name="timeSelectForNT">
                <label for="notTimeNotS" class="timeSelect" :class="{ 'checked': changeFormForNT == 'notSummer' }">非夏月期間</label>
            </div>
            <!-- 用電量輸入 -->

            <div class="inputDegree isWhite">
                <label for="nTDegrees">請輸入本期度數</label>
            <input type="number" v-model="notTimeDegree" id="nTDegrees" class="">
            <span>度</span>
            </div>
            <div class="rateChart">
                <img src="./notTimeRate.png" alt=""><p>1.用戶因 2 個月抄表、收費一次，計費時各段度數係加倍計算。 <br>
                2.依電業法第 52 條所稱使用維生輔具之身障家庭，其用電依住宅用電價計費者，超過 1000 度以上部分，按 701~1000 度部分單價計費。 </p>
            </div>
            <div class="nTsummer">
                <button type="submit" @click="notTimeTotal(notTimeDegree)" class="calculate">試算</button>
                <span class="cost">本期電費約為</span><span class="twd">{{notT + '元'}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700;900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Zen Maru Gothic';
}
.areaOne{
    width: 100%;
    height: 50dvh;
    background-image: url();
    .details{
        width: 30%;
        padding: 2%;
        background: #fff;
        opacity: 0.9;
        border-radius: 20px;
        box-shadow: 2px 2px 2px gray;
    }
}
.title{
    width: 215px;
    height: 120px;
    background: #2F5954;
    color: white;
    text-align: center;
    padding-top: 25px;
    border-radius: 50px;
    box-shadow: 5px 5px 5px grey;
}
.large{
    width: 250px;
    height: 100px;
    padding-top: 20px;
    span{
        color: #D8FB5A;
        font-size: 14px;
    }
}
.calculator{
    width: 600px;
    height: 900px;
    border: 2px solid #2F5954;
    border-radius: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 20px;
    .note{
        width: 300px;
        height: 60px;
        font-size: 12px;
        position: absolute;
        right:15px;
        top: 30px;
        a{
            color: #2F5954;
        }
    }
    .selectedTime{
        position: absolute;
        top:130px;
        .timeSelect{
            display: inline-block;
            width: 180px;
            height: 50px;
            border-radius: 15px;
            margin: 0 15px;
            padding-top: 10px;
            background: #fff;
            cursor: pointer;
            border: 2px solid #2F5954;
            transition: background-color .2s ease-in;
            text-align: center;
            box-shadow: 2px 2px  #2F5954 ;
            &:hover {
                background-color:  #48725C;
                color:#fff;
            }
            &:checked{
                background: #2F5954}
                
            }
            .checked{
            transition: box-shadow .3s ease-in;
            
            background: #2F5954;
            color:#fff;
            }
            input[type="radio"]{
                display: none;
                }
        }
    .inputDegree{
        position: absolute;
        top: 220px;
        font-size: 18px;
        padding: 20px 40px;
        border-radius: 25px;
        background: #C9D9CD;
        box-shadow: 2px 2px 3px #bbbbbb;
        input{
            width: 100px;
            padding: 5px;
            outline: none;
            border: none;
            margin: 0 5px;
            text-align: end;
            font-size: larger;
            background: #C9D9CD;
        }
    }
    .proportionInput{
        width: inherit;
        position: absolute;
        top: 300px;
        padding: 0 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .peakArea{
            height: auto;
            width: 100%;
            padding: 25px 40px;
            border-radius: 40px;
            position: relative;
            .percentDisplay{
                position: absolute;
                right: 45px;
                bottom: 25px;
                font-size: 20px
            }
            h3{
                margin-top: 10px;
            }
            
            //時段顯示條
            .peakDisplay{
                height: 12px;
                width: inherit;
                margin-top: 5px;
                background-color: rgb(209, 75, 75);
                border-radius: 50px;
            }
            .isGreen{
                background-color: rgb(88, 198, 88);
            }
            .isShort{
                width: 40%;
                margin-left: 40px;
                display: inline-block;
            }
            .icon{
                display: flex;
                justify-content: space-between;
            }
        }
        .inputArea{
            width: 100%;
            height: auto;
            padding: 20px 40px;
            border-radius: 25px;
            background: #C9D9CD;
            box-shadow: 2px 2px 3px #bbbbbb;

            // 滑桿
            .slider{
                width: 400px;
                height: 10px;
                border-radius: 30px;
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
                outline: 0;
                appearance: none;
                -webkit-appearance: none;
                cursor: pointer;
                &::-webkit-slider-thumb{
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 2px solid  #707070;
                    background-color: #2F5954;
                    box-shadow: 0px 1px 3px 0px #C9D9CD;
                    &:hover{
                        scale: 1.05;
                        box-shadow: 0px 0px 2px 2px #C9D9CD;
                    }
                }
            }
        }
        .percent{
            display: flex;
            justify-content: space-between;
        }
        .cost{
            position: absolute;
            bottom: -60px;
            left: 120px;
            font-size: 20px;
        }
        .twd{
            position: absolute;
            bottom: -60px;
            right: 150px;
            font-size: 24px;
            font-weight: 600;
        }
    }
    .calculate{
        width: 300px;
        height: 40px;
        border-radius: 50px;
        margin: 30px 0;
        background: #48725C;
        color:#fff;
        cursor: pointer;
        border: 2px solid #2F5954;
        transition: background-color .2s ease-in;
        font-size: 20px;
        letter-spacing: 10px;
        box-shadow: 2px 2px  #2F5954 ;
        &:active{
            background: #2F5954;
            scale: .98;
            color:#fff;
        }
    }
    
    .isWhite{
        background:#fff;
        position: absolute;
        left: 130px;
        input{
            background:#fff;
        }
    }
}
.backgroundDark{
    background: #C9D9CD;
    display: flex;
    justify-content: center;
    align-items: center;
    .rateChart{
        width: 90%;
        position: absolute;
        left: 25px;
        top: 350px;
        img{
            width: 100%;
        }
        p{
            font-size: 12px;
        }
    }
    button{
        position: absolute;
        bottom: 200px;
        left: 150px;
    }
    .cost{
            position: absolute;
            bottom: 120px;
            left: 120px;
            font-size: 20px;
        }
        .twd{
            position: absolute;
            bottom: 120px;
            right: 150px;
            font-size: 24px;
            font-weight: 600;
        }
}
</style>