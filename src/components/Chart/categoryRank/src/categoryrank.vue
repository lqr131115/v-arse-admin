<template>
    <div class="box-card">
        <el-card shadow="hover">
            <template #header>
                <div class="header-wrapper">
                    <span class="header-title">分类销售排行</span>
                    <el-radio-group v-model="radio" size="small">
                        <el-radio-button label="brand">品牌</el-radio-button>
                        <el-radio-button label="goods">商品</el-radio-button>
                    </el-radio-group>
                </div>
            </template>
            <div>
                <v-chart class="echart" :option="option" autoresize/>
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { EChartsOption } from 'echarts'
let radio = ref<string>('brand')
let option = ref<EChartsOption>({
    title: [
        {
            text: '品牌分布',
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        {
            text: '累计订单量',
            subtext: '100',
            textStyle: {
                fontSize: 14,
                color: '#999'
            },
            subtextStyle: {
                fontSize: 28,
                color: '#333',
            },
            left: '49%',
            top: "42%",
            textAlign:'center'
        }]
    ,
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top: '30%'
    },
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],

        }
    ]
})
</script>
<style lang='scss' scoped>
.box-card {
    :deep(.el-card__header) {
        height: 50px;
    }
    :deep(.el-card__body) {
        height: 400px;
    }
}
.echart {
    height: 360px;
    width: 100%;
}
</style>