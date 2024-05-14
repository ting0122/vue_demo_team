<!--導覽頁-->

<script>
import { RouterLink, RouterView } from 'vue-router'

//options API寫法
export default{
    components:{
        //components=>能放在<template>標籤使用的元件或方法
        RouterLink,
    }
}
</script>


<template>
    <div class="headerArea">
        <RouterLink class="routerItem" to="/">Home</RouterLink>
        <RouterLink class="routerItem" to="/eletricalPrice">eletricalPrice</RouterLink>
    </div>
</template>


<style scoped lang="scss">
.headerArea{
    width: 100%;
    height: 100%;
    background-color: rgb(14, 148, 141);
    .routerItem{
        color: white;
        font-size: 24px;
        margin: 0 1%;
        text-decoration: none;
    }
}

</style>