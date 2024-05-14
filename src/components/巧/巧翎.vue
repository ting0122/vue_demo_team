<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
        change1() {
            this.changeVal1 = !this.changeVal1
        }
    }

}

// 資料匯入產生新陣列
let arr = []
fetch("./src/components/巧/巧匯入檔.json")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let oilData = data.油價
        let textName = [];
        textName.push(oilData[0].Column2, oilData[0].Column3, oilData[0].Column4, oilData[0].Column6)


        let yearPoint = [];
        for (let i = 2; i < 37; i++) {
            yearPoint.push(oilData[i].Column11)
        }
        console.log(yearPoint)

        let oil92EachPoint = [];
        for (let i = 2; i < 37; i++) {
            oil92EachPoint.push(oilData[i].Column2)
        }
        oil92EachPoint.splice(31, 1)
        console.log(oil92EachPoint)

        let oil95EachPoint = [];
        for (let i = 2; i < 37; i++) {
            oil95EachPoint.push(oilData[i].Column3)
        }
        oil95EachPoint.splice(31, 1)
        console.log(oil95EachPoint)

        let oil98EachPoint = [];
        for (let i = 2; i < 37; i++) {
            oil98EachPoint.push(oilData[i].Column4)
        }
        oil98EachPoint.splice(31, 1)
        console.log(oil98EachPoint)

        let oildieselEachPoint = [];
        for (let i = 2; i < 37; i++) {
            oildieselEachPoint.push(oilData[i].Column6)
        }
        oildieselEachPoint.splice(31, 1)
        console.log(oildieselEachPoint)


        const chartElement = document.getElementById('myChart');
        const chartImg = {
            // X軸 年分
            labels: yearPoint,
            // Y軸
            datasets: [
                {
                    label: '92無鉛汽油',
                    data: oil92EachPoint,
                    // 點的顏色
                    backgroundColor: "rgba(192, 159, 109, 1)",
                    // hover點的顏色
                    hoverBackgroundColor: "rgba(192, 159, 109, 1)",
                    // 線的顏色
                    borderColor: "rgba(192, 159, 109, 0.5)",
                    // hover點的框線色
                    hoverBorderColor: "rgba(192, 159, 109, 1)",
                    // hover點的大小
                    hoverBorderWidth: 7,
                    type: 'line',
                },
                {
                    label: '95無鉛汽油',
                    data: oil95EachPoint,
                    backgroundColor: "rgba(72, 114, 92, 1)",
                    hoverBackgroundColor: "rgba(72, 114, 92, 1)",
                    borderColor: "rgba(72, 114, 92, 0.5)",
                    hoverBorderColor: "rgba(72, 114, 92, 1)",
                    hoverBorderWidth: 7,
                    type: 'line',
                },
                {
                    label: '98無鉛汽油',
                    data: oil98EachPoint,
                    backgroundColor: "rgba(134, 120, 53, 1)",
                    hoverBackgroundColor: "rgba(134, 120, 53, 1)",
                    borderColor: "rgba(134, 120, 53, 0.5)",
                    hoverBorderColor: "rgba(134, 120, 53, 1)",
                    hoverBorderWidth: 7,
                    type: 'line',
                },
                {
                    label: '超 級 柴 油',
                    data: oildieselEachPoint,
                    backgroundColor: "rgba(47, 89, 84, 1)",
                    hoverBackgroundColor: "rgba(47, 89, 84, 1)",
                    borderColor: "rgba(47, 89, 84, 0.5)",
                    hoverBorderColor: "rgba(47, 89, 84, 1)",
                    hoverBorderWidth: 7,
                    type: 'line',
                }
            ]
        };
        const chart = new Chart(chartElement, {
            type: 'line',
            data: chartImg,
            options: {
            }
        });
    });
</script>

<template>
    <!-- <div class="top">
        <img src="./moto.png" class="moto">
        <div class="lightgreen">
            <div class="space"></div>
            <div class="itemIcon elecIcon">
                <h2><a href="#">電 費 計 算</a></h2>
            </div>
            <div class= "itemIcon" id="oilcon">
                <img src="./gas-pump.png" style="width: 50px;height: 50px;"> -->
                <!-- <h2><a href="#">油 價 動 態</a></h2> -->
            <!-- </div id = onhoveroil>
            <div class="itemIcon chargingStationIcon">
                <h2><a href="#">充 電 站</a></h2>
            </div>
            <div class="itemIcon gasIcon">
                <h2><a href="#">桶 裝 瓦 斯</a></h2>
            </div>


        </div>
        <div class="roadArea">
            <img src="" alt="">
            <div class="itemWhiteGroup">
                <div class="itemWhite"></div>
                <div class="itemWhite"></div>
                <div class="itemWhite"></div>
            </div>
            <div class="itemgrayGroup">
                <div class="itemGray"></div>
                <div class="itemGray"></div>
                <div class="itemGray"></div>
                <div class="itemGray"></div>
            </div>

        </div>
        <div class="greenArea">
            <div class="lightArea"></div>
        </div>
    </div> -->
    <!-- <div class="bgColor">
        <div class="content">
            
            <div class="showpriceArea">

            </div>
            
            <div class="countArea">

            </div>
            <h1 class="titleGroup">歷年各油品價格趨勢圖</h1>
            <div class="myChartArea">
                <canvas id="myChart" @mouseenter="this.change1()"></canvas>
            </div>


        </div>
    </div> -->
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap');

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Zen Maru Gothic", serif;
// }

// #onhoveroil{
//     visibility: hidden;
// }
// #oilcon:hover~#onhoveroil{
//     visibility: visible;
// }

// .top {
//     position: relative;
//     overflow: hidden;

//     .moto {
//         width: 120px;
//         height: 95px;
//         position: absolute;
//         top: 3%;
//         left: 5%;
//         z-index: 1;
//         animation: goRun 12s;
//         animation-iteration-count: 3;
//         transition-timing-function: linear;
//         transform: translate3d(0, 0, 0);
//         overflow: hidden;
//     }

//     .lightgreen {
//         width: 100%;
//         height: 10dvh;
//         background-color: #C9D9CD;
//         padding: 1% 15%;
//         display: flex;

//         a {
//             color: black;
//             text-decoration: none;
//         }
//         .space{
//             width: 15dvw;
//         }
//         .itemIcon {
//             width: 220px;
//             height: 6dvh;
//             text-align: center;
//         }
//         .brandbottom {
//             width: 15px;
//             height: 28px;
//             background-color: white;
//             margin: 0 30px;
//         }
//     }

//     .roadArea {
//         width: 100%;
//         height: 10dvh;
//         background-color: #F8EEDA;
//         position: relative;
//         display: flex;

//         .itemWhiteGroup {
//             width: 5%;
//             height: 10dvh;
//             margin: 0 10%;

//             .itemWhite {
//                 width: 100px;
//                 height: 10px;
//                 background-color: white;
//                 margin: 12.5% 120%;
//             }
//         }

//         .itemgrayGroup {
//             width: 80%;
//             height: 10dvh;
//             display: flex;

//             .itemGray {
//                 width: 120px;
//                 height: 15px;
//                 background-color: #D9D9D9;
//                 margin: 2.5% 7%;
//             }
//         }



//     }

//     .greenArea {
//         width: 100%;
//         height: 10dvh;
//         background-color: #68A59E;

//         .lightArea {
//             width: 10%;
//             height: 10dvh;
//             background-color: #F8EEDA;
//             margin: 0 14.5%;
//         }
//     }
// }

// .bgColor {
//     width: 100%;
//     height: auto;
//     background-color: #68A59E;

//     .content {
//         width: 97%;
//         height: auto;
//         background-color: #F8EEDA;
//         border-radius: 15px;
//         margin: 0 auto;
//         padding: 3% 3%;

//         h2 {
//             color: #294744;
//         }

//         .myChartArea {
//             width: 75%;
//             background-color: #FFF;
//             border: 3pt solid #CCEC60;
//             padding: 20px 15px;
//             border-radius: 10px;
//         }
//     }
// }

// @keyframes goRun {
//     0% {
//         transform: translate3d(0, 0, 0);
//     }

//     50% {
//         transform: translate3d(675px, 0, 0);
//     }

//     100% {
//         transform: translate3d(1500px, 0, 0);
//     }

// }
</style>
