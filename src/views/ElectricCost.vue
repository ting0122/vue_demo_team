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
    <div>
        <eletricalPrice />
    </div>
    <div>
        <calculator />
    </div>
    
</template>

<style scoped lang="scss">
</style>
