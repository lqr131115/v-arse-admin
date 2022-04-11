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
                <v-chart class="echart" :option="option" autoresize />
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { EChartsOption } from 'echarts'
import { categoryRankOpts } from '../data'
let radio = ref<string>('brand')
const option = ref<EChartsOption>(categoryRankOpts)
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