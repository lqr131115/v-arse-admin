<template>
    <c-common-card2 :style="{ width: '100%' }" shadow="hover">
        <template #header>
            <div class="header-wrapper">
                <div class="header-title">热门搜索</div>
            </div>
        </template>
        <template #default>
            <div class="chart" id="main"></div>
        </template>
    </c-common-card2>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { hotSearchOpts } from '../data'

const initChart = () => {
    const ele = document.getElementById('main')
    if (!ele) {
        return
    }
    const chart = echarts.init(ele);
    chart.setOption(hotSearchOpts)
}
onMounted(() => {
    initChart()
})

</script>
<style lang='scss' scoped>
.chart {
    height: 200px;
    width: 100%;
}
</style>