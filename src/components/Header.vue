<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        
    },
    components:{ 
        RouterLink,
    },
}
</script>


<template>

    <!-- <RouterLink class="routerItem" to="/">Home</RouterLink> -->
    <RouterLink class="routerItem" to="/ElectricCost">電價</RouterLink>


</template>


<style scoped lang="scss">
.headerArea{
    width: 10dvw;
    height: 10dvh;
    .routerItem{
        color: black;
        font-size: 20px;
        margin: 0 1%;
        text-decoration: none;
    }
}
</style>