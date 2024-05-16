<script>
import { RouterLink, RouterView } from 'vue-router'
//options API 寫法
export default{
    //components =>放能在<template>中當標籤使用的元件或方法
    components:{
        RouterLink,
    }
}
</script>



<template>
    <div class="headerArea">
        <!-- <RouterLink class="routerItem" to="/"></RouterLink>
        <RouterLink class="routerItem" to="/Taipei"> 臺北市</RouterLink>
        <RouterLink class="routerItem" to="/Jilong"> 基隆市</RouterLink>
        <RouterLink class="routerItem" to="/NewTaipei"> 新北市</RouterLink>
        <RouterLink class="routerItem" to="/Yilan"> 宜蘭縣</RouterLink>
        <RouterLink class="routerItem" to="/HsinchuCity"> 新竹市</RouterLink>
        <RouterLink class="routerItem" to="/Hsinchu"> 新竹縣</RouterLink>
        <RouterLink class="routerItem" to="/Taoyuan"> 桃園市</RouterLink>
        <RouterLink class="routerItem" to="/Miaoli"> 苗栗縣</RouterLink>
        <RouterLink class="routerItem" to="/Taichung"> 台中市</RouterLink>
        <RouterLink class="routerItem" to="/Changhua"> 彰化縣</RouterLink>
        <RouterLink class="routerItem" to="/Nantou"> 南投縣</RouterLink>
        <RouterLink class="routerItem" to="/ChiayiCity"> 嘉義市</RouterLink>
        <RouterLink class="routerItem" to="/Chiayi"> 嘉義縣</RouterLink>
        <RouterLink class="routerItem" to="/Yunlin"> 雲林縣</RouterLink>
        <RouterLink class="routerItem" to="/Tainan"> 台南市</RouterLink>
        <RouterLink class="routerItem" to="/Kaohsiung"> 高雄市</RouterLink>
        <RouterLink class="routerItem" to="/Pingtung"> 屏東縣</RouterLink>
        <RouterLink class="routerItem" to="/Taitung"> 臺東縣</RouterLink>
        <RouterLink class="routerItem" to="/Hualian"> 花蓮縣</RouterLink>
        <RouterLink class="routerItem" to="/Kinmen"> 金門縣</RouterLink>
        <RouterLink class="routerItem" to="/Lienchiang"> 連江縣</RouterLink>
        <RouterLink class="routerItem" to="/Penghu">澎湖縣</RouterLink>
    -->
    <RouterLink class="routerItem" to="/city">city</RouterLink>



    </div>

</template>

<style scoped >

.headerArea{
    width: 100%;
    height: 100%;
    background-color: #48725c;
   
   
}
.routerItem{
    color: white;
    font-size: 24px;
    margin: 0 1%;
    text-decoration: none;
}
.routerItem:hover{
    font-size: 36px;
}
</style>