<template>
    <div class="box-card">
        <el-card shadow="hover">
            <template #header>
                <div class="header-warpper">
                    <div class="header-title">关键字搜索</div>
                </div>
            </template>
            <div>
                <el-row :gutter="10">
                    <el-col :span="12">
                        <v-chart class="echart" :option="option" autoresize />
                    </el-col>
                    <el-col :span="12">
                        <v-chart class="echart" :option="option" autoresize />
                    </el-col>
                </el-row>
                <el-row>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="Date" />
                        <el-table-column prop="name" label="Name" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                    <el-row class="pagination-wrapper" justify="end">
                        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                    </el-row>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import { getKeywordSearchOpts } from '../data'
const option = ref<echarts.EChartsOption>(getKeywordSearchOpts(echarts))
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>
<style lang='scss' scoped>
.box-card {
    :deep(.el-card__header) {
        height: 50px;
    }
    :deep(.el-card__body) {
        height: 400px;
    }

    .echart {
        height: 120px;
        width: 100%;
    }
    .pagination-wrapper {
        flex: 1;
        padding: 10px 0;
    }
}
</style>