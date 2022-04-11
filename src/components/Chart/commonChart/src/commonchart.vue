<template>
    <div ref="chartRef" :style="{ height: '100%', width: '100%' }" />
</template>
<script lang='ts' setup>
import { onMounted, onUnmounted, ref } from 'vue';
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

interface IProps {
    option: EChartsOption
}
const chartRef = ref<any>(null)
const props = defineProps<IProps>()
let myChart: any = null
onMounted(() => {
    myChart = echarts.init(chartRef.value)
    myChart.setOption(props.option)
    window.addEventListener('reset', () => {
        myChart.resize()
    })
})
onUnmounted(() => {
    window.removeEventListener('reset', () => {
        myChart.resize()
    })
})
</script>
<style lang='scss' scoped>
</style>