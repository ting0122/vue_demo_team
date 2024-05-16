<script>
import calculator from '../components/Yuhan/Calculator.vue'
import eletricalPrice from './eletricalPrice.vue'
export default{
    components:{
        calculator,
        eletricalPrice,
    }
}
</script>

<template>
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
