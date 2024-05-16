<script>
import componentchiao from '../components/巧/巧翎.vue';
import componentjhen from '../components/jhen/ThisWeek.vue';

export default {
    data() {
        return {
            oilItemName: '油 價 動 態',
            eleItemName: '電 價 幫 手',
            staItemName: '充電站資訊',
            gasItemName: '桶裝瓦斯價格',
            imageOil: './src/components/巧/巧gas1.png',
            imageEle: './src/components/巧/巧lighticon3.png',
            imageSta: './src/components/巧/巧battery綠.png',
            imageGas: './src/components/巧/巧gas-tank.png',
            oilHovered: false,
            eleHovered: false,
            staHovered: false,
            gasHovered: false,
        }
    },
    components: {
        componentchiao,
        componentjhen,
    },
    methods: {
        change1() {
            this.changeVal1 = !this.changeVal1
        }
    }
}
</script>

<template>
    <div class="top">
        <img src="../components/巧/巧moto.png" class="moto">
        <div class="lightgreen">
            <div class="space"></div>
            <div class="itemIcon" id="elecIcon" @mouseenter="oilHovered = true" @mouseleave="oilHovered = false">
                <div class="eleText" :class="{ 'flipped': oilHovered }">
                    <h3><a href="/ElectricCost">{{ eleItemName }}</a></h3>
                    <img :src="imageEle" class="bgeleImg">
                </div>
            </div>
            <div class="itemIcon" id="oilIcon" @mouseenter="eleHovered = true" @mouseleave="eleHovered = false">
                <div class="oilText" :class="{ 'flipped': eleHovered }">
                    <h3><a href="/oilInformation">{{ oilItemName }}</a></h3>
                    <img :src="imageOil" class="bgoilImg">
                </div>
            </div>
            <div class="itemIcon" id="staIcon" @mouseenter="staHovered = true" @mouseleave="staHovered = false">
                <div class="staText" :class="{ 'flipped': staHovered }">
                    <h3><a href="#">{{ staItemName }}</a></h3>
                    <img :src="imageSta" class="bgstaImg">
                </div>
            </div>
            <div class="itemIcon" id="gasIcon" @mouseenter="gasHovered = true" @mouseleave="gasHovered = false">
                <div class="gasText" :class="{ 'flipped': gasHovered }">
                    <h3><a href="#">{{ gasItemName }}</a></h3>
                    <img :src="imageGas" class="bggasImg">
                </div>
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
    </div>
    <div class="bgColor">
        <div class="content">

            <componentjhen />
            <div class="countArea">
            </div>
            <componentchiao />
            <div class="bottom">
                <div class="titleOilPrice">近年各油品價格趨勢圖</div>
                <div class="myChartArea">
                    <canvas id="myChart" @mouseenter="this.change1()"></canvas>
                </div>
            </div>
            <div class="footer"></div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.top {
    position: relative;
    overflow: hidden;

    .moto {
        width: 120px;
        height: 95px;
        position: absolute;
        top: 3%;
        left: 5%;
        z-index: 1;
        animation: goRun 12s;
        animation-iteration-count: 3;
        transition-timing-function: linear;
        transform: translate3d(0, 0, 0);
        overflow: hidden;
    }

    .lightgreen {
        width: 100%;
        height: 10dvh;
        background-color: #C9D9CD;
        padding: 1% 15%;
        display: flex;

        a {
            color: black;
            text-decoration: none;
        }

        .space {
            width: 15dvw;
        }

        .itemIcon {
            width: 220px;
            height: 6dvh;
            text-align: center;
        }

        .brandbottom {
            width: 15px;
            height: 28px;
            background-color: white;
            margin: 0 30px;
        }
    }

    .roadArea {
        width: 100%;
        height: 10dvh;
        background-color: #F8EEDA;
        position: relative;
        display: flex;

        .itemWhiteGroup {
            width: 5%;
            height: 10dvh;
            margin: 0 10%;

            .itemWhite {
                width: 100px;
                height: 10px;
                background-color: white;
                margin: 12.5% 120%;
            }
        }

        .itemgrayGroup {
            width: 80%;
            height: 10dvh;
            display: flex;

            .itemGray {
                width: 120px;
                height: 15px;
                background-color: #D9D9D9;
                margin: 2.5% 7%;
            }
        }
    }

    .greenArea {
        width: 100%;
        height: 10dvh;
        background-color: #68A59E;

        .lightArea {
            width: 10%;
            height: 10dvh;
            background-color: #F8EEDA;
            margin: 0 14.5%;
        }
    }
}

.bgColor {
    width: 100%;
    height: auto;
    background-color: #68A59E;

    .content {
        width: 97%;
        height: auto;
        background-color: #F8EEDA;
        border-radius: 15px;
        margin: 0 auto;
        padding: 3% 3%;
        position: relative;
        z-index: 1;

        h2 {
            color: #294744;
        }

        .bottom {
            width: 80%;
            margin: 0 auto;

            .titleOilPrice {
                text-align: left;
                font-size: 2em;
                color: #294744;
                font-family: "Zen Maru Gothic", serif;
                font-weight: 500;
                margin-top: 20px;
                display: flex;
            }

            .myChartArea {
                margin: 18px auto;
                width: 96%;
                background-color: #FFF;
                border: 3pt solid #CCEC60;
                padding: 20px 15px;
                border-radius: 10px;
                z-index: 3;
                position: relative;
            }
    }
    .footer{
                width: 100%;
                height: 36dvh;
                background-color: #294744;
                position: absolute;
                bottom: 0%;
                z-index: 2;
                bottom: 0%;
                left: 0%;

            }
        }
}

@keyframes goRun {
    0% {
        transform: translate3d(0, 0, 0);
    }

    50% {
        transform: translate3d(725px, 0, 0);
    }

    100% {
        transform: translate3d(1500px, 0, 0);
    }

}

#oilIcon,
#eleIcon,
#staIcon,
#gasIcon {
    position: relative;
    display: inline-block;
    justify-content: center;
}

.oilText,
.eleText,
.staText,
.gasText {
    position: absolute;
    display: flex;
    width: 220px;
    transform: scale(1, 1);
    color: white;
    text-align: center;
    line-height: 6dvh;
    transition: transform 0.5s ease;
    justify-content: center;
}

.flipped {
    transform: scale(1.2, 1.2);
}

.bgoilImg,
.bgeleImg {
    width: 50px;
    height: 6dvh;
}

.bggasImg {
    width: 40px;
    height: 6dvh;
}

.bgstaImg {
    width: 35px;
    height: 6dvh;
    margin-left: 7px
}
</style>
