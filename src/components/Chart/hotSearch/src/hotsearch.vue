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
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { onMounted } from 'vue';

onMounted(() => {
    const ele = document.getElementById('main')!
    const chart = echarts.init(ele);
    // #region
    chart.setOption({
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            sizeRange: [12, 45],
            rotationRange: [-90, 90],
            rotationStep: 45,
            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            width: '80%',
            height: '80%',
            // 网格的大小越大，单词之间的间隙就越大。
            gridSize: 10,
            emphasis: {
                focus: 'self',
                textStyle: {
                    textShadowBlur: 10,
                    textShadowColor: '#333'
                }
            },
            data: [
                {
                    name: '旅游',
                    value: 320,
                },
                {
                    name: '美食',
                    value: 289,
                },
                {
                    name: '电影',
                    value: 254,
                },
                {
                    name: '科技',
                    value: 211,
                },
                {
                    name: '情感',
                    value: 301,
                }, {
                    name: '生活',
                    value: 104,
                }, {
                    name: '教育',
                    value: 178,
                },

            ]

        }]

    })
})
</script>
<style lang='scss' scoped>
.chart {
    height: 200px;
    width: 100%;
}
</style>