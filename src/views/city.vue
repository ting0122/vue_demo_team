<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from "../components/Header.vue"
//options API 寫法
export default{
    //components =>放能在<template>中當標籤使用的元件或方法
    components:{
        RouterLink,
        RouterView,
        Header
    }
}
</script>

<template>
    <div>
        <Header/>
    </div>
        <RouterLink  class="one" to="/city/Taipei">台北市</RouterLink>
        <RouterLink  class="one"to="/city/Jilong"> 基隆市</RouterLink>
        <RouterLink  class="one"to="/city/NewTaipei"> 新北市</RouterLink>
        <RouterLink  class="one"to="/city/Yilan"> 宜蘭縣</RouterLink>
        <RouterLink  class="one"o="/city/HsinchuCity"> 新竹市</RouterLink>
        <RouterLink  class="one"to="/city/Hsinchu"> 新竹縣</RouterLink>
        <RouterLink  class="one"to="/city/Taoyuan"> 桃園市</RouterLink>
        <RouterLink  class="one"to="/city/Miaoli"> 苗栗縣</RouterLink>
        <RouterLink  class="one"to="/city/Taichung"> 台中市</RouterLink>
        <RouterLink  class="one"to="/city/Changhua"> 彰化縣</RouterLink>
        <RouterLink  class="one"to="/city/Nantou"> 南投縣</RouterLink>
        <RouterLink  class="one"to="/city/ChiayiCity"> 嘉義市</RouterLink>
        <RouterLink  class="one"to="/city/Chiayi"> 嘉義縣</RouterLink>
        <RouterLink  class="one"to="/city/Yunlin"> 雲林縣</RouterLink>
        <RouterLink  class="one"to="/city/Tainan"> 台南市</RouterLink>
        <RouterLink  class="one"to="/city/Kaohsiung"> 高雄市</RouterLink>
        <RouterLink  class="one"to="/city/Pingtung"> 屏東縣</RouterLink>
        <RouterLink  class="one"to="/city/Taitung"> 臺東縣</RouterLink>
        <RouterLink  class="one"to="/city/Hualian"> 花蓮縣</RouterLink>
        <RouterLink  class="one"to="/city/Kinmen"> 金門縣</RouterLink>
        <RouterLink  class="one"to="/city/Lienchiang"> 連江縣</RouterLink>
        <RouterLink  class="one"to="/city/Penghu">澎湖縣</RouterLink>
<RouterView />

</template>
<style scoped>
.one{
    color: #48725c;
    font-size: 24px;
    margin: 0 1%;
    text-decoration: none ;
}
</style>