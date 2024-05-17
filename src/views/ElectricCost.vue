<script>
import calculator from '../components/Yuhan/Calculator.vue'
import eletricalPrice from './eletricalPrice.vue'
import Header from "../components/Header.vue"
export default{
    components:{
        calculator,
        eletricalPrice,
        Header
    }
}
</script>

<template>
    <Header/>
    <div class="chart">
        <eletricalPrice />
    </div>
    <div class="calculator">
        <calculator />
    </div>

</template>

<style scoped lang="scss">

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f8eeda;
}
div{
    padding-top: 50px;
}
</style>
